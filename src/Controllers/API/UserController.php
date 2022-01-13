<?php

namespace BrainalyzedWP\Controllers\API;

use BrainalyzedWP\Bootstrap\App;
use BrainalyzedWP\Helpers\Helper;

class UserController
{
	public function validate()
	{
		if (!isset($_POST['apikey'])) {
			wp_send_json([
				'error' => 'Key not sent properly.'
			], 404);
		}
		$apikey = $_POST['apikey'];
		$userId = (int) @get_users([
			'fields' => 'ids',
			'meta_key' => App::$app->user::API_KEY_META,
			'meta_value' => $apikey,
			'meta_compare' => '==',
			'number' => 1
		])[0];

		if (!$userId) {
			wp_send_json([
				'error' => 'Key not found.'
			], 404);
		}

		$notDelayed = App::$app->api->notDelayed($userId);

		wp_send_json($notDelayed);
	}
}
