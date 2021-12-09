<?php

namespace BrainalyzedWP\Services;

use BrainalyzedWP\Controllers\CronController;

class Cron
{
	/** @property CronController */
	public $controller;

	public function __construct()
	{
		$this->controller = new CronController;
		// add_filter('cron_schedules', [$this, 'cronIntervals']);
	}

	public function handler()
	{
		try {
			$this->controller->whitelist();
			$this->controller->listData();
			$this->controller->tradesData();
		} catch (\Throwable $th) {
			return [
				'status' => 'error',
				'message' => $th->getMessage(),
			];
		}

		return [
			'status' => 'success',
		];
	}

	public function cronIntervals($schedules)
	{
		$schedules['five_minutes'] = array(
			'interval' => 5 * 60,
			'display'  => esc_html__('Every Five Minute'),
		);
		return $schedules;
	}
}
