const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
	await res.render('gateway.html', {
		name: 'world'
	})
})

router.get('/setup', (req, res) => {
	res.render('setup.html')
})

module.exports = router