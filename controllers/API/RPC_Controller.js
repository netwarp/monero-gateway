const axios = require('axios')

exports.fetch = async (request, response) => {

	const object_complete = request.body

	const url_rpc = object_complete.url_rpc
	const object_rpc = object_complete.object_rpc

	const res = await axios.post(url_rpc, object_rpc)
	const data = await res.data

	console.log(data)

	response.json(data)
}

