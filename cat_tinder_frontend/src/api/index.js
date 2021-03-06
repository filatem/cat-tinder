const BASE = 'http://localhost:3000'

let getCats = () => {
	return fetch(BASE + '/cats')
		.then((resp) => {
			let json = resp.json()
			return json
		})
}

let createCat = cat => {
	return fetch(BASE + '/cats', {
		body: JSON.stringify(cat),  //stringify the json for fetch
		headers: {  //sending JSON, expect JSON back; info about the content
			'Content-Type': 'application/json'
		},
		method: "POST"  //correct endpoint invoked on server
	})
		.then((resp) => { //promise
			let json = resp.json()
			return json
		})
}

let deleteCat = id => {
	return fetch(`${BASE}/cats/${id}`, {

		headers: {
			'Content-Type': 'application/json'
		},
		method: "DELETE"
	})
		.then((resp) => {
			let json = resp.json()
			return json
		})
}

let updateCat = id => {
	return fetch(`${BASE}/cats/${id}`, {
		headers: {
			'Content-Type': 'application/json'
		},
		method: "PUT"
	})
		.then((resp) => {
			let json = resp.json()
			return json
		})
}


export  {
	getCats
}

export  {
	createCat
}

export  {
	deleteCat
}

export  {
	updateCat
}
