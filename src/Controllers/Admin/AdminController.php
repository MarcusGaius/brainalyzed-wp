<?php

namespace BrainalyzedWP\Controllers\Admin;

use BrainalyzedWP\Helpers\Helper;

class AdminController
{
	function getAdminPage()
	{
		\ob_start(); ?>
		<h1>API Admin</h1>
		<hr>
		<button id="purge-signals" class="button-primary">Purge Signals</button>
		<form method="POST" action="" enctype="multipart/form-data">
			<p>Placeholder</p>
			<p class="submit">
				<button name="save" class="button-primary woocommerce-save-button" type="submit" value="<?php esc_attr_e( 'Save changes', 'woocommerce' ); ?>"><?php esc_html_e( 'Save changes', 'woocommerce' ); ?></button>
			</p>
		</form>
		<?php $output = \ob_get_clean();
		echo $output;
	}

	public function purgeSignals()
	{
		global $wpdb;
		try {
			// $wpdb->query('START TRANSACTION');
			$sql = "DELETE from wp_options WHERE option_name REGEXP 'signal_data'";
			$wpdb->query($sql);
			exec('wp cron event run brainalyzed_cron_task --path=/var/www/html');
			// $wpdb->query('COMMIT');
		} catch (\Throwable $th) {
			// $wpdb->query('ROLLBACK');
			Helper::log($th->getMessage());
			wp_send_json(['error', $th->getMessage()], 500);
		}
		wp_send_json(['success']);
	}
}
