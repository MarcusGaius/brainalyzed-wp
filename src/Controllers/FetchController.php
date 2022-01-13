<?php

namespace BrainalyzedWP\Controllers;

use BrainalyzedWP\Bootstrap\App;
use BrainalyzedWP\Helpers\Helper;
use BrainalyzedWP\Services\Cron;

class FetchController
{
	public function instances()
	{
		$instances = get_option(
			sprintf(
				"%sinstances",
				App::$app->api->option_prefix,
			)
		);
		wp_send_json($instances);
	}

	public function pairs()
	{
		$instances = get_option(
			sprintf(
				"%sinstances",
				App::$app->api->option_prefix,
			)
		);
		// $notDelayed = App::$app->api->notDelayed();

		// $instances = array_map(function ($instance) use ($notDelayed) {
		// 	return [
		// 		'name' => $instance['name'],
		// 		'frequency' => $instance['frequency'],
		// 		'delayed' => !in_array($instance['name'], $notDelayed),
		// 	];
		// }, $instances);

		// usort($instances, function ($a, $b) {
		// 	return $a['delayed'] <=> $b['delayed'];
		// });

		wp_send_json($instances);
	}

	public function data()
	{
		$pair = $_POST['pair'];
		$freq = $_POST['frequency'];
		$limit = $_POST['limit'];

		$pairData = get_option(sprintf(
			"%s%s-%s",
			App::$app->api->option_prefix,
			Helper::slugify($pair),
			$freq,
		));

		$pairData['data'] = array_slice($pairData['data'], -$limit, $limit);
		$pairData['data_start'] = $pairData['data'][0][0] . '+00:00';
		$pairData['data_start_ts'] = $pairData['data'][0][8];
		$pairData['length'] = $limit;
		wp_send_json($pairData);
	}

	public function trades()
	{
		$handle = 'trades';
		$trades = get_option(
			sprintf(
				"%s%s",
				App::$app->api->option_prefix,
				Helper::slugify($handle),
			),
		);
		wp_send_json($trades);
	}

	public function signals()
	{
		$pair = $_POST['pair'];
		$freq = $_POST['frequency'];

		$signals = get_option(
			sprintf(
				"%s%s-%s-signal_data",
				App::$app->api->option_prefix,
				Helper::slugify($pair),
				$freq,
			), [
				'frequency'	=> $freq,
				'name'		=> $pair,
				'signals'	=> ['wrong'],
			]
		);
		wp_send_json($signals);
	}

	public function frequencies()
	{
		$freqMap = [
			'1m' => 60*1000,
			'5m' => 60*5*1000,
			'15m' => 60*15*1000,
			'30m' => 60*30*1000,
			'1h' => 60*60*1000,
			'2h' => 60*60*2*1000,
			'4h' => 60*60*4*1000,
			'6h' => 60*60*6*1000,
			'8h' => 60*60*8*1000,
			'12h' => 60*60*12*1000,
			'1d' => 60*60*24*1000
		];
		$frequencies = get_option(
			sprintf(
				"%s%s",
				App::$app->api->option_prefix,
				'frequencies',
			)
		);
		$mappedFrequencies = [];
		foreach ($freqMap as $freqKey => $freqValue) {
			if (in_array($freqKey, $frequencies)) {
				$mappedFrequencies[] = [
					'name' => $freqKey,
					'value' => $freqValue,
				];
			}
		}
		wp_send_json($mappedFrequencies);
	}
}
