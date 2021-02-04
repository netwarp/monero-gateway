const axios = require('axios')
const Payment = require('../models/Payment')


exports.tx = async (txid, io) => {

	let res 
	let data
	let result

	res = await axios.post('http://localhost:18089/json_rpc', {
		"jsonrpc":"2.0", 
		"id":"0", 
		"method":"get_transfer_by_txid",
		"params": {
			txid
		}
	})

	data = res.data
	result = data.result

	const payment_id = result.transfer.payment_id
	
	const status = 'completed'

	const payment = await Payment.findOneAndUpdate({ payment_id, status })

	io.of('/gateway').emit('pop')
	io.of('/dashboard').emit('update_payment', payment_id, status)

	console.log('all done')
}