<?php

namespace BrainalyzedWP\Bootstrap;

use BrainalyzedWP\Helpers\Helper;
use BrainalyzedWP\Services\API;
use BrainalyzedWP\Services\Route;
use BrainalyzedWP\Services\XHR;
use Composer\Autoload\ClassLoader;

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
		$this->baseUri();
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
		
		add_action('wp_enqueue_scripts', function () {
			wp_register_script('brainalyzed_wp', $this->baseUri('assets/js/app.js'), [], microtime(), true);
			$frontObject = [
				'ajax_url' => admin_url('admin-ajax.php'),
			];
			wp_localize_script('brainalyzed_wp', 'brainalyzed_wp', $frontObject);
			wp_enqueue_script('brainalyzed_wp');
			wp_enqueue_script('brainalyzed_signals', $this->baseUri('assets/js/signals.js'), [], microtime(), true);
		}, 99);
	}

	public function basePath($path = '')
	{
		return dirname(__DIR__) . "/$path";
	}

	public function baseUri($path = '')
	{
		return get_stylesheet_directory_uri() . "/vendor/marcusgaius/brainalyzedwp/src/$path";
	}
}
