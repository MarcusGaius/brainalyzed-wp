<?php

namespace BrainalyzedWP\Controllers\API;

use BrainalyzedWP\Bootstrap\App;
use BrainalyzedWP\Helpers\Helper;

class GitController
{
	public function handle()
	{
		wp_send_json(['pera']);
	}
}
