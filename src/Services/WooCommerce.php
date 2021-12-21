<?php

namespace BrainalyzedWP\Services;

use BrainalyzedWP\Bootstrap\App;

class WooCommerce
{
	public function __construct()
	{
		add_action('woocommerce_account_menu_items', [$this, 'addBrainalyzedApiToAccountMenu']);
		add_filter('query_vars', [$this, 'brainalyzedApiQueryVars'], 0);
		add_action('woocommerce_account_brainalyzed-api_endpoint', [$this, 'brainalyzedApiTabContent']);
		add_action('init', [$this, 'brainalyzedApiEndpoint']);
	}

	public function addBrainalyzedApiToAccountMenu($items)
	{
		$items['brainalyzed-api'] = 'API';
		return $items;
	}

	public function brainalyzedApiTabContent()
	{
		$this->_tabContent();
	}

	public function brainalyzedApiQueryVars($vars)
	{
		$vars[] = 'brainalyzed-api';
		return $vars;
	}

	public function brainalyzedApiEndpoint()
	{
		add_rewrite_endpoint('brainalyzed-api', EP_ROOT | EP_PAGES);
	}

	private function _tabContent()
	{
		$key = App::$app->user->getKey();
		$output = require App::$app->basePath('templates/account/content.php');
		echo $output;
	}
}
