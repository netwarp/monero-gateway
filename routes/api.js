const express = require('express')
const router = express.Router()

const SetupController = require('../controllers/API/SetupController')

const DaemonController = require('../controllers/API/DaemonController')

router.post('/setup/database/test', SetupController.databaseTest)

router.post('/setup/database/create-user', SetupController.databaseCreateUser)


router.post('/daemon', DaemonController.fetch)

module.exports = router