const Payment = require('../models/Payment')

exports.index = async (request, response) => {

	const id = request.query.id 
	
	const payment = await Payment.findById(id)

	await response.render('gateway.html', {
		payment
	})
}