const express = require('express')
const { testController } = require('../controllers/testControlles')



const router = express.Router()

router.get('/', testController)


module.exports = router ;