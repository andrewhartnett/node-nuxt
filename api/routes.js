const route = require('express').Router()
const UserController = require('./app/controllers/UserController')

route.get('/', (req, res) => {
  return res.status(200).json({success: true})
})

route.post('/login', UserController.login)
route.post('/user', UserController.create)

module.exports = route