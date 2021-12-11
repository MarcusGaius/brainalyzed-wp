<?php

use BrainalyzedWP\Bootstrap\App;
use BrainalyzedWP\Controllers\FetchController;
use BrainalyzedWP\Services\Cron;

App::$app->xhr->post('test', [FetchController::class, 'candleDataRaw']);
App::$app->xhr->post('cron', [Cron::class, 'cronHandler']);

App::$app->xhr->post('whitelist', [FetchController::class, 'whitelist']);

App::$app->xhr->post('pairs', [FetchController::class, 'pairs']);
App::$app->xhr->post('data', [FetchController::class, 'data']);
App::$app->xhr->post('trades', [FetchController::class, 'trades']);

App::$app->xhr->post('frequencies', [FetchController::class, 'frequencies']);
