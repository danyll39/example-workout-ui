const express = require('express')
const workoutController = require('../controllers/workOuts')
const router = express.Router()

router.post('/', workoutController.saveNewWorkout)

router.get('/', workoutController.getAllWorkouts)

router.get('/', workoutController.getWorkOutsByBody)


module.exports = router
