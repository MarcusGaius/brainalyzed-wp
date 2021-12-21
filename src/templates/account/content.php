<?php

\ob_start(); ?>
<h1>API Key management</h1>
<hr>
<br>
<div id="api-key" <?php if (!$key) : ?>class="hide"<?php endif; ?>>
	<div>
		<span>Your API Key: </span><span id="apikey"><?php echo $key; ?></span>
	</div>
	<br>
	<div class="tooltip">
		<button onclick="copyKey()"><i class="far fa-copy"></i>
			<span class="tooltiptext">Copy API key</span>
		</button>
	</div>
</div>
<div id="missing-key" <?php if ($key) : ?>class="hide"<?php endif; ?>>
	<span><strong>Attention!</strong> Key not generated. Press the button below to generate it.</span>
</div>
<br>
<div>
	<button onclick="generateKey()">Generate new API key</button>
</div>
<script>
	function copyKey() {
		var copyText = document.getElementById("apikey");

		/* Copy the text inside the text field */
		navigator.clipboard.writeText(copyText.innerText);
	}

	function generateKey() {
		body = new FormData()
		body.append('action', 'generate-key')
		fetch(brainalyzed_wp.ajax_url, {
				headers: {
					Accept: 'application/json',
				},
				method: 'POST',
				mode: 'cors',
				cache: 'no-cache',
				credentials: 'same-origin',
				redirect: 'follow',
				referrerPolicy: 'no-referrer',
				body: body,
			})
			.then(response => response.json())
			.then(data => {
				document.querySelector('#apikey').innerText = data.brainalyzed_api_key
				document.querySelector('#api-key').classList.remove('hide')
				document.querySelector('#missing-key').classList.add('hide')
			})
	}
</script>
<style>
	.tooltip {
		position: relative;
		display: inline-block;
	}

	.tooltip .tooltiptext {
		visibility: hidden;
		width: 140px;
		background-color: #555;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 5px;
		position: absolute;
		z-index: 1;
		bottom: 150%;
		left: 50%;
		margin-left: -75px;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.tooltip .tooltiptext::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: #555 transparent transparent transparent;
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
		opacity: 1;
	}
</style>
<?php $output = \ob_get_clean();
return $output;
