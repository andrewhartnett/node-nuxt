const route = require('express').Router()

route.get('/', UserController.show)

module.exports = route