<?php

use BrainalyzedWP\Bootstrap\App;
use BrainalyzedWP\Controllers\Api\SignalController;

App::$app->routes->post('pera', [SignalController::class, 'index']);
App::$app->routes->post('mika', [SignalController::class, 'show']);