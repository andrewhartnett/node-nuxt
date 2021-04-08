const route = require('express').Router()
const UserController = require('../UserController')

route.get('/', UserController.show)

module.exports = route