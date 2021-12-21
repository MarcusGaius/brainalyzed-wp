<?php

namespace BrainalyzedWP\Traits;

use BrainalyzedWP\Bootstrap\App;
use BrainalyzedWP\Controllers\Admin\AdminController;
use BrainalyzedWP\Services\API;
use BrainalyzedWP\Services\Cron;
use BrainalyzedWP\Services\Route;
use BrainalyzedWP\Services\User;
use BrainalyzedWP\Services\WooCommerce;
use BrainalyzedWP\Services\XHR;

trait ApplicationTrait
{
	/** @var App $app */
	public static $app = null;

	/** @var Route */
	public $routes;

	/** @var User */
	public $user;

	/** @var XHR */
	public $xhr;

	/** @var API */
	public $api;

	/** @var Cron */
	public $cron;

	/** @var WooCommerce */
	public $wc;

	/** @var AdminController */
	public $admin;
	
}
