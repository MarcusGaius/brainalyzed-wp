<?php

namespace BrainalyzedWP\Services;

class Route
{
	/**
	 * All of the verbs supported by the router.
	 *
	 * @var string[]
	 */
	public $verbs = [
		'GET',
		'HEAD',
		'POST',
		'PUT',
		'PATCH',
		'DELETE',
		'OPTIONS',
	];

	const NAMESPACE = 'brainalyzed';

	const VERSION = 'v1';

	public $_routes = [];

	public function get($uri, $callback)
	{
		$this->addRoute('GET', $uri, $callback);
	}

	public function post($uri, $callback)
	{
		$this->addRoute('POST', $uri, $callback);
	}

	public function addRoute($method, $uri, $callback)
	{
		if (is_array($callback)) $callback[0] = new $callback[0];
		$this->_routes[] = [
			'method'	=> $method,
			'uri'		=> $uri,
			'callback'	=> $callback,
		];
	}

	public function registerRoutes()
	{
		foreach ($this->_routes as $route) {
			add_action('rest_api_init', function () use ($route) {
				register_rest_route(
					sprintf('%s/%s', self::NAMESPACE, self::VERSION),
					$route['uri'],
					[
						'methods' => $route['method'],
						'callback' => $route['callback'],
					],
				);
			});
		}
	}
}
