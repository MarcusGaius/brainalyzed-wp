<?php

namespace BrainalyzedWP\Controllers;

use BrainalyzedWP\Bootstrap\App;
use BrainalyzedWP\Helpers\Helper;

class TestController
{
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
		wp_send_json($pairData);
	}
}
