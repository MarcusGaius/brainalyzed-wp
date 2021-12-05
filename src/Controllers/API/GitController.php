<?php

namespace BrainalyzedWP\Controllers\API;

use BrainalyzedWP\Bootstrap\App;

class GitController
{
	public function handle()
	{
		$path = App::$app->basePath();
		ob_start();
		exec("cd $path");
		exec('git pull');
		$output = ob_get_clean();
		wp_send_json([
			'output' => $output,
		]);
	}
}
