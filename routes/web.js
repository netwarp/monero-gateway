const express = require('express')
const router = express.Router()

require('dotenv').config()

const GatewayController = require('../controllers/GatewayController')

router.get('/', GatewayController.index)

router.get('/setup', (req, res) => {
	res.render('setup.html')
})

router.get('/login', (req, res) => {
	res.render('login.html')
})

router.get('/dashboard', (req, res) => {
	res.render('dashboard.html')
})

module.exports = router