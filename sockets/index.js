let map_socket_payment = new Map()

module.exports = (io) => {
	io.on('connection', (socket) => {
		console.log('welcome in gateway___ _ __ _ _')

		const payment_id = socket.handshake.query.payment_id
		// console.log(payment_id)
		// console.log(socket.id)

		map_socket_payment.set(socket.id, payment_id)
		console.log(map_socket_payment)

		socket.on('test', () => {

			io.to(socket.id).emit('pop', socket.id)
		})


		socket.on('disconnect', () => {
			map_socket_payment.delete(socket.id)
		})
	})
}