
const model = require('../models')


const getAllWorkouts = async (request, response) => {
  const workouts = await model.Workout.findAll({
  })

  return response.send(workouts)
}

const getWorkOutsByBody = async (request, response) => {
  const { id } = request.params
  const foundWorkout = await model.Workout.findOne({
    where: {
      [model.Sequelize.Op.or]: [
        { id: id },
        { workoutName: { [model.Sequelize.Op.like]: `%${id}%` } },
      ]
    },
    include: [{
      model: model.BodyParts
    }]

  })

  return foundWorkout
    ? response.send(foundWorkout) : response.sendStatus(404)
}

const saveNewWorkout = async (request, response) => {
  try {
    const { workoutName, description, equipmentId } = request.body

    if (!workoutName || !description || !equipmentId) {
      return response.status(400).send('This is not completed')
    }
    const newWorkout = await model.Workout.create({ workoutName, description, equipmentId })

    return response.status(201).send(newWorkout)
  } catch (error) {
    return response.status(500).send('Can not add Workout')
  }
}


module.exports = { getAllWorkouts, getWorkOutsByBody, saveNewWorkout }
