const express = require('express')
const router = express.Router()

const SetupController = require('../controllers/API/SetupController')


router.post('/setup/database/test', SetupController.databaseTest)

router.post('/setup/database/create-user', SetupController.databaseCreateUser)


module.exports = router