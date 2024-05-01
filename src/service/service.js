const API_URL = process.env.NEXT_PUBLIC_API_URL

export const fetchData = async (url, body) => {
	let configFetch = {
		method: 'GET'
	}
	if (body) {
		configFetch = {
			body: JSON.stringify(body),
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	}
	const response = await fetch(`${API_URL}${url}`, configFetch)
	return response
}
