
const route = require('express').Router()
const WorkoutController = require('../WorkoutController')

route.get('/', WorkoutController.index)
route.post('/', WorkoutController.store)

route.get('/:id', WorkoutController.show)
route.put('/:id', WorkoutController.update)

module.exports = route