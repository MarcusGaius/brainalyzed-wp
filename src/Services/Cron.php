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
			$this->instances();
			$candleDataHasUpdate = $this->instanceData();
			if ($candleDataHasUpdate) {
				$this->signalsData();
			}
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

	public function instances()
	{
		$instances = App::$app->api->get('instances');
		$this->_setFrequencies();
		update_option(
			sprintf(
				"%sinstances",
				App::$app->api->option_prefix,
			),
			$instances,
		);
	}

	public function instanceData()
	{
		$instances = get_option(
			sprintf(
				"%sinstances",
				App::$app->api->option_prefix,
			)
		);
		$frequencies = $this->_getFrequencies();
		$shouldUpdate = false;

		foreach ($instances as $instance) {
			foreach ($frequencies as $frequency) {
				if ($frequency == $instance['frequency']) {
					$shouldUpdate = $this->pairData($instance['name'], $frequency) || $shouldUpdate;
				}
			}
		}
		// return true;
		return $shouldUpdate;
	}

	public function pairData($pair, $timeframe)
	{
		$candleDataOld = get_option(sprintf(
			"%s%s-%s",
			App::$app->api->option_prefix,
			Helper::slugify($pair),
			$timeframe,
		), []);

		if (!$this->shouldUpdateCandleData($candleDataOld)) return false;

		$candleDataNew = App::$app->api
			->get(
				"freq/pair_candles?pair=$pair&timeframe=$timeframe&limit=500",
				// [
				// 	'query' => [
				// 		// 'pair'		=> $pair,
				// 		'timeframe'	=> $timeframe,
				// 		'limit'		=> 500,
				// 	],
				// ],
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
			return true;
		}

		$candleDataRaw = Helper::md_unique_sort(8, $candleDataOld['data'], $candleDataNew['data']);

		$candleData = [
			'strategy'			=> $candleDataOld['strategy'],
			'pair'				=> $candleDataOld['pair'],
			'timeframe'			=> $candleDataOld['timeframe'],
			'timeframe_ms'		=> $candleDataOld['timeframe_ms'],
			'columns'			=> $candleDataNew['columns'],
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
		if ($pair == 'BTC/USDT') {
			Helper::log('pera');
		}

		return true;
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

	public function signalsData()
	{
		$handle = 'signals';
		$signalsData = App::$app->api->get($handle);

		foreach ($signalsData as $signalDataNew) {
			$signalDataOld = get_option(
				sprintf(
					"%s%s-%s-signal_data",
					App::$app->api->option_prefix,
					Helper::slugify($signalDataNew['name']),
					$signalDataNew['frequency'],
				),
				[],
			);

			if (empty($signalDataOld)) {
				update_option(
					sprintf(
						"%s%s-%s-signal_data",
						App::$app->api->option_prefix,
						Helper::slugify($signalDataNew['name']),
						$signalDataNew['frequency'],
					),
					$signalDataNew,
				);
				continue;
			}

			$signalRaw = Helper::md_unique_sort('time', $signalDataOld['signals'], $signalDataNew['signals']);

			$signalData = [
				'name' => $signalDataNew['name'],
				'frequency' => $signalDataNew['frequency'],
				'signals' => $signalRaw,
			];
			update_option(
				sprintf(
					"%s%s-%s-signal_data",
					App::$app->api->option_prefix,
					Helper::slugify($signalDataNew['name']),
					$signalDataNew['frequency'],
				),
				$signalData,
			);
		}
	}

	private function _setFrequencies()
	{
		$instances = get_option(
			sprintf(
				"%sinstances",
				App::$app->api->option_prefix,
			)
		);
		$frequencies = array_unique(array_column($instances, 'frequency'));

		update_option(
			sprintf(
				"%s%s",
				App::$app->api->option_prefix,
				'frequencies',
			),
			$frequencies,
		);
	}

	private function _getFrequencies()
	{
		$frequencies = get_option(
			sprintf(
				"%s%s",
				App::$app->api->option_prefix,
				'frequencies',
			)
		);
		return $frequencies;
	}

	private function shouldUpdateCandleData(array $candleData): bool
	{
		if (!empty($candleData)) {
			Helper::log("{$candleData['pair']} {$candleData['timeframe']}:\nShould update at:\t" . ($candleData['timeframe_ms'] + $candleData['data_stop_ts']) . "\nCurrent Timestamp:\t" . time() * 1000);
			if (($candleData['timeframe_ms'] + $candleData['data_stop_ts']) > (time() * 1000)) return false;
			Helper::log(str_pad("{$candleData['pair']} {$candleData['timeframe']}:", 26) . "Updated\n");
		}
		return true;
	}
}
