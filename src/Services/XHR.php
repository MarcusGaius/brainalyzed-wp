<?php

namespace BrainalyzedWP\Services;

class XHR
{
	public function post($action, $callback)
	{
		if (is_array($callback)) $callback[0] = new $callback[0];
		add_action("wp_ajax_nopriv_$action", $callback);
		add_action("wp_ajax_$action", $callback);
	}
}
