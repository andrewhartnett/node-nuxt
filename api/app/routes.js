import UserController from './users/UserController'

module.exports = {
  register(app) {
    app.get('/', (req, res) => {
      return res.status(200).json({success: true})
    })

    app.post('/login', UserController.login)
    app.post('/user', UserController.create)

    // User Middleware
    app.use(require('./middleware/user'))
    app.use('/user', require('./users/routes'))

  }

}