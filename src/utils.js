export async function post(path, data) {
	const res = await fetch(`${path}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	if (!res.ok) {
		let err;
		try {
			err = await res.json();
		} catch (_) {
			err = { errors: { server: ['Unexpected error'] } };
		}
		return err;
	}

	return res.json();
}
