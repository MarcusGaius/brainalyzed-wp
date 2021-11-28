<?php

namespace BrainalyzedWP\Controllers;

use BrainalyzedWP\Bootstrap\App;

class FetchController
{
	function pairs($a = '', $timeframe = '5m', $limit = '500') {
		$whitelist = get_option('pair_list_raw');
		$candleData = [];
		foreach ($whitelist as $pair) {
			$candlePair = App::$app->api->get(
				'pair_candles',
				[
					'query' => [
						'pair'		=> $pair,
						'timeframe'	=> $timeframe,
						'limit'		=> $limit,
					]
				]
			);
			$candleData[] = $candlePair;
			// $candleData[] = json_decode($pair['pair_candles']['value']->getBody(), true);
		}
	
		// }
		wp_send_json($candleData);
	}
}
