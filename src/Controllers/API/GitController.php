<?php

namespace BrainalyzedWP\Controllers\API;

use BrainalyzedWP\Bootstrap\App;

class GitController
{
	public function handle()
	{
		$path = App::$app->basePath();
		exec("cd $path");
		exec('git pull');
		wp_send_json(['pera']);
	}
}
