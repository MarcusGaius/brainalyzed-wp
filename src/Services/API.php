<?php

namespace BrainalyzedWP\Services;

use GuzzleHttp\Client;

class API
{
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
		$this->creds = get_option("{$this->option_prefix}creds");
		$this->client = new Client([
			'base_uri' => $this->baseUrl,
			'timeout' => 10
		]);

		$creds = base64_encode($this->creds);
		$options = array_merge(
			$this->options,
			[
				'headers' => [
					'Authorization'	=> "Basic $creds",
				],
			],
		);
		$login = $this->client->post('token/login', $options);

		if ($login->getStatusCode() != 200) dd('api login error');
		$loginOutput = json_decode($login->getBody(), true);
		$this->accessToken = $loginOutput['access_token'];
		$this->refreshToken = $loginOutput['refresh_token'];
	}

	public function get(string $endpoint, $config = []): array
	{
		$options = array_merge($this->options, [
			'headers' => [
				'Authorization'	=> "Bearer {$this->accessToken}"
			]
		], $config);
		$response = $this->client
			->get($endpoint, $options);
		return json_decode($response->getBody(), true);
	}
}
