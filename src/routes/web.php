<?php

use BrainalyzedWP\Bootstrap\App;
use BrainalyzedWP\Controllers\FetchController;

App::$app->xhr->post('pairs', [FetchController::class, 'pairs']);
