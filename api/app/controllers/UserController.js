const UserModel = require('../models/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = 'MYSECRET'

module.exports = {
  async login(req, res) {
    try{
      // Find user by email
      const user = await UserModel.findOne({email: req.body.email.toLowerCase()})

      if(!user) {
        throw new Error('Invalid Login')
      }

      // Compare passwords
      const valid = await bcrypt.compareSync(req.body.password, user.password)

      if(!valid) {
        throw new Error('Invalid Login')
      }

      const token = jwt.sign({id: user._id}, secret)

      return res.status(200).json({user: userTransformer(user), token})

    } catch(err) {

      return res.status(404).json({message: 'Invalid Login'})

    }
  },
  async create(req, res) {
    const saltRounds = 10

    const hash = await bcrypt.hashSync(req.body.user.password, saltRounds)

    const user = await UserModel.create({
      email: req.body.user.email,
      password: hash
    })

    const token = jwt.sign({id: user._id}, secret)

    return res.status(200).json({success: true, user, token})
  },
  async show(req, res) {
    return res.status(200).json({user: req.user})
  },
}