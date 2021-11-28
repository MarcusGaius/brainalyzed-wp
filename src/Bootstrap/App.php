<?php

namespace BrainalyzedWP\Bootstrap;

use BrainalyzedWP\Services\API;
use BrainalyzedWP\Services\Route;
use BrainalyzedWP\Services\XHR;

class App
{
	public static $app = null;

	/** @var Route */
	public $routes;

	/** @var XHR */
	public $xhr;

	/** @var API */
	public $api;

	private function __construct()
	{
		static::$app = $this;

		$this->init();
	}

	public static function getApp()
	{
		if (self::$app === null) {
			self::$app = new App();
		}

		return self::$app;
	}

	public function init()
	{
		add_action('rest_api_init', function () {

			$this->routes = new Route;
			require_once $this->basePath('routes/api.php');
			$this->routes->registerRoutes();
		});

		add_action('after_setup_theme', function () {
			$this->xhr = new XHR;
			$this->api = new API;
			require_once $this->basePath('routes/web.php');
		});
	}

	public function basePath($path = '')
	{
		return dirname(__DIR__) . "/$path";
	}
}
