<?php

namespace BrainalyzedWP\Controllers\Admin;

class AdminController
{
	function getAdminPage()
	{
		\ob_start(); ?>
		<h1>API Admin</h1>
		<hr>
		<form method="POST" action="" enctype="multipart/form-data">
			<p>Placeholder</p>
			<p class="submit">
				<button name="save" class="button-primary woocommerce-save-button" type="submit" value="<?php esc_attr_e( 'Save changes', 'woocommerce' ); ?>"><?php esc_html_e( 'Save changes', 'woocommerce' ); ?></button>
			</p>
		</form>
		<?php $output = \ob_get_clean();
		echo $output;
	}
}
