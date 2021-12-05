<?php

use BrainalyzedWP\Bootstrap\App;
use BrainalyzedWP\Controllers\CronController;
use BrainalyzedWP\Controllers\FetchController;

App::$app->xhr->post('test', [FetchController::class, 'candleDataRaw']);
App::$app->xhr->post('cron', [CronController::class, 'cronHandler']);

App::$app->xhr->post('whitelist', [FetchController::class, 'whitelist']);

App::$app->xhr->post('pairs', [FetchController::class, 'pairs']);
App::$app->xhr->post('data', [FetchController::class, 'data']);
App::$app->xhr->post('trades', [FetchController::class, 'trades']);
