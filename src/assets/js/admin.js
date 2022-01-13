const purgeSignals = () => {
	body = new FormData()
	body.append('action', 'purge-signals')
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
		.then(data => console.log(data))
}

document.querySelector('#purge-signals')?.addEventListener('click', e => {
	purgeSignals()
})