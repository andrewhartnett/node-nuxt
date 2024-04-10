
const WorkoutModel = require('./WorkoutModel')

module.exports = {
  async store(req, res) {
    const workout = new WorkoutModel({
      userId: req.user._id,
      name: req.body.name
    })

    await workout.save()

    return res.json({workout})
  },

  async index (req, res) {
    const workout = await WorkoutModel.find({userId: req.user._id})

    return res.json(workout)
  },

  async show (req, res) {
    const workout = await WorkoutModel.findOne({_id: req.params.id})

    return res.json({workout})
  },

  async update (req, res) {
    const workout = await WorkoutModel.findOne({_id: req.params.id})

    workout.name = req.body.workout.name
    workout.excercises = req.body.workout.excercises

    await workout.save()

    return res.json({workout})
  }
}