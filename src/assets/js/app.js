const cron = () => {
	body = new FormData()
	body.append('action', 'cron')
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

const trades = () => {
	body = new FormData()
	body.append('action', 'trades')
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
