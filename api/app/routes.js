const route = require('express').Router()
const UserController = require('./controllers/UserController')

route.get('/user', UserController.show)

module.exports = route