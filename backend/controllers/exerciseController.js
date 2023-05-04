const jwt = require('jsonwebtoken')

const exerciseRouter = require("express").Router();
const User = require('../models/userModel')
const Exercise = require('../models/exerciseModel')

exerciseRouter.get("/:name", async (request, response) => {
  const exercise = await Exercise.findOne({name: request.params.name})
  if (!exercise) {
    return response.status(401).json({ error: 'exercise not found'})
  }

  return response.status(200).send(exercise)
});

exerciseRouter.post("/add-exercise", async (request, response) => {  
  const decodedToken = jwt.decode(request.body.token, { complete: true })
  if (!decodedToken) {
    return response.status(401).json({ error: 'token decode failed' })
  }

  if (!decodedToken.payload.id) {
    return response.status(401).json({ error: 'token not found' })
  }
  const user = await User.findById(decodedToken.payload.id)
  user.exerciseDeck.push(request.body.name)
  user.save()
  return response.status(200).send(user)
});

exerciseRouter.delete("/delete-exercise", async (request, response) => {
  const decodedToken = jwt.decode(request.body.token, { complete: true })

  if (!decodedToken) {
    return response.status(401).json({ error: 'token decode failed' })
  }

  if (!decodedToken.payload.id) {
    return response.status(401).json({ error: 'token not found' })
  }

  const user = await User.findById(decodedToken.payload.id)
  index = user.exerciseDeck.splice(user.exerciseDeck.find((pos) => (pos === request.body.name)), 1)
  delete index
  user.save()
  return response.status(200).send(user.exerciseDeck)
});

exerciseRouter.delete("/replace-exercise", async (request, response) => {
  const decodedToken = jwt.decode(request.body.token, { complete: true })

  if (!decodedToken) {
    return response.status(401).json({ error: 'token decode failed' })
  }

  if (!decodedToken.payload.id) {
    return response.status(401).json({ error: 'token not found' })
  }

  const user = await User.findById(decodedToken.payload.id)
  user.exerciseDeck = request.body.lst
  user.save()
  return response.status(200).send(user.exerciseDeck)
});

module.exports = exerciseRouter;