<?php

namespace BrainalyzedWP\Controllers;

use BrainalyzedWP\Bootstrap\App;
use BrainalyzedWP\Helpers\Helper;

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
		$notDelayed = array_column(App::$app->api->notDelayed(), 'name');

		$instances = array_map(function ($instance) use ($notDelayed) {
			return [
				'name' => $instance['name'],
				'frequency' => $instance['frequency'],
				'delayed' => !in_array($instance['name'], $notDelayed, 'name'),
			];
		}, $instances);

		usort($instances, function ($a, $b) {
			return $a['delayed'] <=> $b['delayed'];
		});

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
		if (!$pairData) {
			Helper::log([
				$pair, $freq, $limit
			]);
		}
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
			),
			[
				'frequency'	=> $freq,
				'name'		=> $pair,
				'signals'	=> [],
			]
		);
		$notDelayed = App::$app->api->notDelayed();
		$freqTimestamp = App::$app->api->freqMap[$freq];

		if (!in_array($pair, array_column($notDelayed, 'name'))) {
			foreach ($signals['signals'] as $signalKey => $signalValue) {
				if ((int) $signalValue['time'] * 1000 > time() * 1000 - $freqTimestamp * 20) {
					unset($signals['signals'][$signalKey]);
				}
			}
		}

		wp_send_json($signals);
	}

	public function frequencies()
	{
		$freqMap = App::$app->api->freqMap;
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
