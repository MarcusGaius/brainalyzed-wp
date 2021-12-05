<?php

namespace BrainalyzedWP\Controllers;

use BrainalyzedWP\Bootstrap\App;
use BrainalyzedWP\Helpers\Helper;

class FetchController
{
	public function candleDataRaw()
	{
		$whitelist = get_option('pair_list_raw');
		$timeframe = '5m';
		$candleData = [];
		foreach ($whitelist as $pair) {
			(new CronController)->pairData($pair, $timeframe);
			$candlePair = get_option(sprintf(
				"%s%s-%s",
				App::$app->api->option_prefix,
				Helper::slugify($pair),
				$timeframe,
			));

			if (!$candlePair) {
				(new CronController)->pairData($pair, $timeframe);
				$candlePair = get_option(sprintf(
					"%s%s-%s",
					App::$app->api->option_prefix,
					Helper::slugify($pair),
					$timeframe,
				));
			}

			$candleData[] = $candlePair;
		}
		wp_send_json($candleData);
	}

	public function whitelist()
	{
		$whitelist = get_option('pair_list_raw');
		wp_send_json($whitelist);
	}

	public function pairs()
	{
		$whitelistRaw = get_option('pair_list_raw');
		$frequency = '5m';
		$notDelayed = $this->_notDelayed();

		$pairs = array_map(function ($pair) use ($notDelayed, $frequency) {
			return [
				'name' => $pair,
				'frequency' => $frequency,
				'delayed' => !in_array($pair, $notDelayed),
			];
		}, $whitelistRaw);

		usort($pairs, function ($a, $b) {
			return $a['delayed'] <=> $b['delayed'];
		});

		wp_send_json($pairs);
	}

	public function data()
	{
		$pair = $_POST['pair'];
		$freq = $_POST['freq'];
		$limit = $_POST['limit'];

		$pairData = get_option(sprintf(
			"%s%s-%s",
			App::$app->api->option_prefix,
			Helper::slugify($pair),
			$freq,
		));

		$pairData['data'] = array_slice($pairData['data'], -$limit, $limit);
		$pairData['data_start'] = $pairData['data'][0][0] . '+00:00';
		$pairData['data_start_ts'] = $pairData['data'][0][25];
		$pairData['length'] = $limit;
		wp_send_json($pairData);
	}

	private function _notDelayed()
	{
		global $user;
		$userSubscriptions = wcs_get_users_subscriptions($user->ID);
		$notDelayed = [];

		foreach ($userSubscriptions as $sub) {
			foreach ($sub->get_items() as $order_product) {
				$notDelayed = array_merge(
					$notDelayed,
					explode(
						' | ',
						wc_get_product(
							$order_product->get_product()
								->get_parent_id()
						)->get_attribute('pairs')
					)
				);
			}
		}

		return $notDelayed;
	}

	private function _plan()
	{
		global $user;
		$userSubscriptions = wcs_get_users_subscriptions($user->ID);
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

	public function frequencies()
	{
		wp_send_json([
			[
				'name' => '5m',
				'value' => 30000,
			],
		]);
	}
}
