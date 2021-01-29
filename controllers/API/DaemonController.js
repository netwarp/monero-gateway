const axios = require('axios')

exports.fetch = async (request, response) => {

	const object = request.body

	const url = 'http://localhost:38081/json_rpc'

	const r = await axios.post(url, object)
	const data = await r.data

	console.log(data)

	response.json(data)
}

