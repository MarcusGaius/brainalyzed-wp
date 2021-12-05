<?php

namespace BrainalyzedWP\Controllers\API;

use BrainalyzedWP\Bootstrap\App;

class GitController
{
	public function handle()
	{
		$pass = isset($_REQUEST['pass']) ? $_REQUEST['pass'] : '';
		$user = isset($_REQUEST['user']) ? $_REQUEST['user'] : '';
		if ($pass != $_ENV['AUTH_PASS'] || $user != $_ENV['AUTH_USER']) {
			wp_send_json([
				'status' => 'error',
				'message' => 'Invalid Credentials.',
			], );
		}
		$path = App::$app->basePath();
		$output = [];
		exec("git -C $path pull 2>&1", $output);
		wp_send_json([
			'output' => $output,
		]);
	}
}
