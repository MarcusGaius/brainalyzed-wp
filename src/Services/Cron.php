<?php

namespace BrainalyzedWP\Services;

use BrainalyzedWP\Bootstrap\App;
use BrainalyzedWP\Helpers\Helper;

class Cron
{

	public function __construct()
	{
		add_filter('cron_schedules', [$this, 'cronIntervals']);

		add_action('brainalyzed_cron_task', [$this, 'handler']);
		if (!wp_next_scheduled('brainalyzed_cron_task')) {
			wp_schedule_event(time(), 'five_minutes', 'brainalyzed_cron_task');
		}
	}

	public function handler()
	{
		try {
			$this->whitelist();
			$this->listData();
			$this->tradesData();
		} catch (\Throwable $th) {
			return [
				'status' => 'error',
				'message' => $th->getMessage(),
			];
		}

		return [
			'status' => 'success',
		];
	}

	public function cronHandler()
	{
		try {
			$this->whitelist();
			$this->listData();
			$this->tradesData();
		} catch (\Throwable $th) {
			wp_send_json([
				'status' => 'error',
				'message' => $th->getMessage(),
			]);
		}

		wp_send_json([
			'status' => 'success',
		]);
	}

	public function cronIntervals($schedules)
	{
		$schedules['five_minutes'] = [
			'interval' => 5 * 60,
			'display'  => esc_html__('Every Five Minute'),
		];
		$schedules['minute'] = [
			'interval' => 60,
			'display'  => esc_html__('Every Minute'),
		];
		return $schedules;
	}

	public function whitelist()
	{
		$whitelist = App::$app->api->get('whitelist');
		update_option('pair_list_raw', $whitelist['whitelist']);
	}

	function listData()
	{
		$list = get_option('pair_list_raw');
		$timeframes = $this->_getTimeframes();
		$candleData = [];
		foreach ($list as $pair) {
			foreach ($timeframes as $timeframe) {
				$candleData[] = $this->pairData($pair, $timeframe);
			}
		}
	}

	public function pairData($pair, $timeframe)
	{
		$candleDataOld = get_option(sprintf(
			"%s%s-%s",
			App::$app->api->option_prefix,
			Helper::slugify($pair),
			$timeframe,
		), []);

		$candleDataNew = App::$app->api
			->get(
				'pair_candles',
				[
					'query' => [
						'pair'		=> $pair,
						'timeframe'	=> $timeframe,
						'limit'		=> 500,
					],
				],
			);

		if (empty($candleDataOld)) {
			update_option(
				sprintf(
					"%s%s-%s",
					App::$app->api->option_prefix,
					Helper::slugify($pair),
					$timeframe,
				),
				$candleDataNew,
			);
			return;
		}

		$candleDataRaw = Helper::md_unique_sort(25, $candleDataOld['data'], $candleDataNew['data']);

		$candleData = [
			'strategy'			=> $candleDataOld['strategy'],
			'pair'				=> $candleDataOld['pair'],
			'timeframe'			=> $candleDataOld['timeframe'],
			'timeframe_ms'		=> $candleDataOld['timeframe_ms'],
			'columns'			=> $candleDataOld['columns'],
			'data'				=> $candleDataRaw,
			'length'			=> count($candleDataRaw),
			'buy_signals'		=> $candleDataOld['buy_signals'],
			'sell_signals'		=> $candleDataOld['sell_signals'],
			'last_analyzed'		=> $candleDataNew['last_analyzed'],
			'last_analyzed_ts'	=> $candleDataNew['last_analyzed_ts'],
			'data_start_ts'		=> $candleDataOld['data_start_ts'],
			'data_start'		=> $candleDataOld['data_start'],
			'data_stop'			=> $candleDataNew['data_stop'],
			'data_stop_ts'		=> $candleDataNew['data_stop_ts'],
		];

		update_option(
			sprintf(
				"%s%s-%s",
				App::$app->api->option_prefix,
				Helper::slugify($pair),
				$timeframe,
			),
			$candleData,
		);
	}

	public function tradesData()
	{
		$handle = 'trades';
		$tradesDataOld = get_option(
			sprintf(
				"%s%s",
				App::$app->api->option_prefix,
				Helper::slugify($handle),
			),
			[],
		);

		$tradesDataNew = App::$app->api->get($handle);
		if (empty($tradesDataOld)) {
			update_option(
				sprintf(
					"%s%s",
					App::$app->api->option_prefix,
					Helper::slugify($handle),
				),
				$tradesDataNew,
			);
			return;
		}

		$tradesRaw = Helper::md_unique_sort('open_timestamp', $tradesDataOld['trades'], $tradesDataNew['trades']);

		$tradesData = [
			'trades' => $tradesRaw,
			'trades_count' => count($tradesRaw),
			'total_trades' => count($tradesRaw),
		];
		update_option(
			sprintf(
				"%s%s",
				App::$app->api->option_prefix,
				Helper::slugify($handle),
			),
			$tradesData,
		);
	}

	private function _getTimeframes()
	{
		return [
			'5m',
		];
	}
}
