<?php

namespace BrainalyzedWP\Helpers;

class Helper
{
	public static function log($log)
	{
		error_log(print_r($log, true) . "\r\n", 3, ABSPATH . 'wp-content/log.log');
	}

	public static function slugify($text, string $divider = '-')
	{
		// replace non letter or digits by divider
		$text = preg_replace('~[^\pL\d]+~u', $divider, $text);

		// transliterate
		$text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);

		// remove unwanted characters
		$text = preg_replace('~[^-\w]+~', '', $text);

		// trim
		$text = trim($text, $divider);

		// remove duplicate divider
		$text = preg_replace('~-+~', $divider, $text);

		// lowercase
		$text = strtolower($text);

		if (empty($text)) {
			return 'n-a';
		}

		return $text;
	}

	public static function md_unique_sort($key, array $arr1, array $arr2): array
	{
		$dataOld = array_merge($arr1, $arr2);

		$timestamps = array_unique(array_column($dataOld, $key));
		sort($timestamps);
		$dataNew = [];

		foreach ($timestamps as $timestamp) {
			$dataNew[] = $dataOld[array_search($timestamp, array_column($dataOld, $key))];
		}

		return $dataNew;
	}
}
