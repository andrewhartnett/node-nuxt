const mongoose = require('mongoose')

const schema = {
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  excercises: [
    {
      name: {
        type: String,
        required: true
      },
      sets: [
        {
          reps: {
              type: Number,
              required: true
          },
          weight: {
              type: Number,
              required: true
          }
        }
      ]
    }
  ],
}

const WorkoutSchema = new mongoose.Schema(schema, {timestamps: true})

module.exports = mongoose.model('Workout', WorkoutSchema)