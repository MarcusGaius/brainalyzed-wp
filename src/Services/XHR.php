<?php

namespace BrainalyzedWP\Services;

class XHR
{
	public function post($action, $callback, $accepted_args = 1, $priority = 10)
	{
		if (is_array($callback)) $callback[0] = new $callback[0];
		add_action("wp_ajax_nopriv_$action", $callback, $priority, $accepted_args);
		add_action("wp_ajax_$action", $callback, $priority, $accepted_args);
	}
}
