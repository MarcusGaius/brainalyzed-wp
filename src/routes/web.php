<?php

use BrainalyzedWP\Bootstrap\App;
use BrainalyzedWP\Controllers\FetchController;
use BrainalyzedWP\Services\Cron;
use BrainalyzedWP\Services\User;

App::$app->xhr->post('cron', [Cron::class, 'cronHandler']);

App::$app->xhr->post('pairs', [FetchController::class, 'pairs']);
App::$app->xhr->post('data', [FetchController::class, 'data']);
// App::$app->xhr->post('trades', [FetchController::class, 'trades']);
App::$app->xhr->post('signals', [FetchController::class, 'signals']);
App::$app->xhr->post('frequencies', [FetchController::class, 'frequencies']);

App::$app->xhr->post('generate-key', [User::class, 'generateKey']);
