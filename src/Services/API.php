<?php

namespace BrainalyzedWP\Services;

use BrainalyzedWP\Bootstrap\App;
use BrainalyzedWP\Helpers\Helper;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;

class API
{
	public $freqMap = [
		'1m' => 60*1000,
		'5m' => 60*5*1000,
		'15m' => 60*15*1000,
		'30m' => 60*30*1000,
		'1h' => 60*60*1000,
		'2h' => 60*60*2*1000,
		'4h' => 60*60*4*1000,
		'6h' => 60*60*6*1000,
		'8h' => 60*60*8*1000,
		'12h' => 60*60*12*1000,
		'1d' => 60*60*24*1000
	];

	public $option_prefix = 'brainalyzed_api_';

	private $client;
	private $accessToken;
	private $refreshToken;

	private $baseUrl;
	private $creds;
	private $options = [
		'headers' => [
			'Content-Type'	=> 'application/json',
			'Accept'		=> 'application/json',
		]
	];

	public function __construct()
	{
		$this->baseUrl = get_option("{$this->option_prefix}base_url");
		// $this->creds = get_option("{$this->option_prefix}creds");
		$this->client = new Client([
			'base_uri' => $this->baseUrl,
			'timeout' => 10
		]);

		// $creds = base64_encode($this->creds);
		$options = array_merge(
			$this->options,
			[
				// 'headers' => [
				// 	'Authorization'	=> "Basic $creds",
				// ],
			],
		);
		// $login = $this->client->post('token/login', $options);

		// if ($login->getStatusCode() != 200) dd('api login error');
		// $loginOutput = json_decode($login->getBody(), true);
		// $this->accessToken = $loginOutput['access_token'];
		// $this->refreshToken = $loginOutput['refresh_token'];
	}

	public function get(string $endpoint, $config = []): array
	{
		$options = array_merge($this->options, [], $config);
		try {
			$response = $this->client->get($endpoint, $options);
		} catch (ClientException $e) {
			$response = $e->getResponse();
			$responseBodyAsString = $response->getBody()->getContents();
			Helper::log($responseBodyAsString);
		}
		return json_decode($response->getBody(), true);
	}

	public function notDelayed($userId = null)
	{
		$instances = get_option(
			sprintf(
				"%sinstances",
				App::$app->api->option_prefix,
			)
		);

		if (!$userId) {
			$userId = get_current_user_id();
		}

		$userSubscriptions = wcs_get_users_subscriptions((int) $userId);
		$notDelayed = [];

		try {
			foreach ($userSubscriptions as $sub) {
				foreach ($sub->get_items() as $order_product) {
					// dd($order_product->get_product());
					$product = wc_get_product($order_product->get_product());
					$pairs = explode(' | ', $product->get_attribute('pairs'));
					foreach ($pairs as $pair) {
						$notDelayed = array_merge(array_filter($instances, function($instance) use ($pair) {
							return $pair == $instance['name'];
						}), $notDelayed);
					}
				}
			}
		} catch (\Throwable $th) {
			return [];
		}

		return $notDelayed;
	}
}
