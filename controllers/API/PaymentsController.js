const axios = require('axios')
const crypto = require('crypto')
const Payment = require('../../models/Payment')

exports.index = async (request, response) => {

	const payments = await Payment.find()

	return response.json(payments)	
}

exports.store = async (request,response) => {

	let res 
	let data
	let result
	let address

	// integrated_address
	res = await axios.post('http://localhost:18089/json_rpc', {
		"jsonrpc":"2.0", 
		"id":"0", 
		"method":"get_address" 
	})
	data = await res.data
	result = await data.result

	address = result.address

	const payment_id = crypto.randomBytes(32).toString('hex')
	console.log(payment_id)

	// make_uri
	const amount = await request.body.amount
	 
	const tx_description = request.body.tx_description ?? 'a description'
	res = await axios.post('http://localhost:18089/json_rpc', {
		"jsonrpc":"2.0", 
		"id":"0", 
		"method":"make_uri",
		"params": {
			address: address,
			amount: amount * 1000000000000, // atomic unit,
			payment_id,
			tx_description
		}
	})
	
	data = await res.data
	result = await data.result

	let uri = result.uri
	console.log(result)

	const doc = {
		amount,
		address,
		payment_id,
		uri
	}
	const payment = await Payment.create(doc)

	await response.json(payment)
}

exports.show = async (request,response) => {

	const id = request.body.id
	const payment = await Payment.findById(id)

	await response.json(data)
}

exports.update = async (request,response) => {

	const id = request.body.id
	const payment = await Payment.findById(id)
}

exports.destroy = async (request,response) => {
	
	const id = request.body.id
	const payment = await Payment.findById(id)
}