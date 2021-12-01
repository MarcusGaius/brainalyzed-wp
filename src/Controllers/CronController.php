<?php

namespace BrainalyzedWP\Controllers;

use BrainalyzedWP\Bootstrap\App;
use BrainalyzedWP\Helpers\Helper;

class CronController
{
	public function whitelist()
	{
		$whitelist = App::$app->api->get('whitelist');
		update_option('pair_list_raw', $whitelist['whitelist']);
	}

	function listData($list, $timeframe)
	{
		$candleData = [];
		foreach ($list as $pair) {
			$candleData[] = $this->pairData($pair, $timeframe);
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
						'limit'		=> empty($candleDataOld) ? 500 : 20,
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
}
