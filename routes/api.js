const express = require('express')
const router = express.Router()

const SetupController = require('../controllers/API/SetupController')

const RPC_Controller = require('../controllers/API/RPC_Controller')


router.post('/setup/database/test', SetupController.databaseTest)
router.post('/setup/database/create-user', SetupController.databaseCreateUser)

router.post('/rpc', RPC_Controller.fetch)

module.exports = router