
const express = require('express')

const UsersCtrl = require('../controllers/users-ctrl')

const router = express.Router()


router.post('/user', UsersCtrl.createUser)

module.exports = router