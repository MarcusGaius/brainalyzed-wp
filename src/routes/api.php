<?php

use BrainalyzedWP\Bootstrap\App;
use BrainalyzedWP\Controllers\TestController;
use BrainalyzedWP\Controllers\API\GitController;
use BrainalyzedWP\Controllers\API\UserController;

App::$app->routes->post('data', [TestController::class, 'data']);
App::$app->routes->post('git', [GitController::class, 'handle']);


// Validation Route
App::$app->routes->post('validate', [UserController::class, 'validate']);