const axios = require('axios')

const Payment = require('../models/Payment')

let map_socket_payment = new Map()

module.exports = async (io) => {

	// gateway
	const gateway_namespace = io.of('/gateway')

	gateway_namespace.on('connection', async (socket) => {
		console.log('welcome in gateway')

		const payment_id = socket.handshake.query.payment_id

		const payment = await Payment.findById(payment_id)

		if (! payment) {
			return
		}
		
		switch (payment.status) {
			case 'initialised':

				await payment.update({ status: 'pending' })
				dashboard_namespace.emit('update_payment', payment_id, 'pending')

				break
			case 'pending':

				await payment.update({ status: 'pending' })
				dashboard_namespace.emit('update_payment', payment_id, 'pending')

				break
			case 'completed':

				break
			case 'cancelled':

				await payment.update({ status: 'pending' })
				dashboard_namespace.emit('update_payment', payment_id, 'pending')
				
				break
		}

		

		// console.log(payment_id)
		// console.log(socket.id)

		map_socket_payment.set(socket.id, payment_id)
		console.log(map_socket_payment)

		

		socket.on('disconnect', async () => {
			map_socket_payment.delete(socket.id)

			switch (payment.status) {
				case 'initialised':

					await payment.update({ status: 'cancelled' })
					dashboard_namespace.emit('update_payment', payment_id, 'cancelled')

					break
				case 'pending':

					await payment.update({ status: 'cancelled' })
					dashboard_namespace.emit('update_payment', payment_id, 'cancelled')

					break
				case 'completed':

					break
				case 'cancelled':

					await payment.update({ status: 'cancelled' })
					dashboard_namespace.emit('update_payment', payment_id, 'cancelled')

					break
			}
		})
	})

	// dashboard
	const dashboard_namespace = io.of('/dashboard')

	dashboard_namespace.on('connection', socket => {

		socket.on('tx_done', async (txid) => {

			console.log('new tx here;; controller socket')

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

			data = await res.data
			result = await data.result

			const payment_id = result.transfer.payment_id
			const status = 'completed'

			console.log('payment_id: ',payment_id)

			const payment = await Payment.findOneAndUpdate({ payment_id }, {status})

			console.log('payment: ', payment)

			socket.emit('update_payment', payment_id, status)

			gateway_namespace.emit('pop')
		})

		socket.on('test', () => console.log('test'))
	})

	return io 
}