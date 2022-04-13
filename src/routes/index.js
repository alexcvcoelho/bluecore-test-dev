const express = require('express')
const router = express.Router()

router.use('/api/users', require('./user'))
router.use('/api/auth', require('./auth'))

router.use('/', require('./root'))

module.exports = router
