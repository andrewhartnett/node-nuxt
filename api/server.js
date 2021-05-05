require('dotenv').config()
const express = require('express')
var app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const busboy = require('connect-busboy')
const routes = require('./app/routes')

var mongoDB = 'mongodb://mongo:27017/newproject'

const mongoConfig = {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

mongoose.connect(mongoDB, mongoConfig)

app.use(cors())
app.use(express.json())
app.use(busboy())

// Register the routes
app = routes.register(app)

// Not to confuse, but the app serves port 8080, and docker maps that to 3000
// This is located in the docker-compose.yml file
app.listen(8080, () => {
  console.log(`API RUNNING ON http://localhost:3000`)
})