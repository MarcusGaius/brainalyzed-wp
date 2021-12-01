<?php

use BrainalyzedWP\Bootstrap\App;
use BrainalyzedWP\Controllers\TestController;

App::$app->routes->post('data', [TestController::class, 'data']);