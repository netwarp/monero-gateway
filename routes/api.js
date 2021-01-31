const express = require('express')
const router = express.Router()

const SetupController = require('../controllers/API/SetupController')

const RPC_Controller = require('../controllers/API/RPC_Controller')

const PaymentsController = require('../controllers/API/PaymentsController')


router.post('/setup/database/test', SetupController.databaseTest)
router.post('/setup/database/create-user', SetupController.databaseCreateUser)

router.post('/rpc', RPC_Controller.fetch)

router.get('/payments', PaymentsController.index)
router.post('/payments', PaymentsController.store)
router.get('/payments/:id', PaymentsController.show)
router.put('/payments/:id', PaymentsController.update)
router.delete('/payments/:id', PaymentsController.destroy)

module.exports = router