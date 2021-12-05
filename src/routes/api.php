<?php

use BrainalyzedWP\Bootstrap\App;
use BrainalyzedWP\Controllers\TestController;
use BrainalyzedWP\Controllers\API\GitController;

App::$app->routes->post('data', [TestController::class, 'data']);
App::$app->routes->post('git', [GitController::class, 'handle']);