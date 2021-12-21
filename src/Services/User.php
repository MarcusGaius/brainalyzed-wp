<?php

namespace BrainalyzedWP\Services;

class User
{
	const API_KEY_META = 'brainalyzed_api_key';

	public function generateKey()
	{
		$key = wp_generate_uuid4();
		$userId = get_current_user_id();
		update_user_meta(
			$userId,
			self::API_KEY_META,
			$key,
		);
		if (wp_doing_ajax()) {
			wp_send_json([
				self::API_KEY_META => $key
			]);
		}
		return $key;
	}

	public function getKey()
	{
		$userId = get_current_user_id();
		$key = get_user_meta(
			$userId,
			self::API_KEY_META,
			true,
		);
		if (wp_doing_ajax()) {
			wp_send_json([
				self::API_KEY_META => $key
			]);
		}
		return $key;
	}

	public function roleCheck()
	{
		
	}
}
