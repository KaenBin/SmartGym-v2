const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const userRouter = require("express").Router();
const User = require("../models/userModel");

// Create new user
userRouter.post("/signup", async (request, response) => {
  const { username, password } = request.body;
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return response.status(400).json({
      error: "username must be unique",
    });
  }
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const user = new User({
    username,
    passwordHash,
  });
  const savedUser = await user.save();
  const userForToken = {
    username: savedUser.username,
    id: savedUser._id,
  }
  const token = jwt.sign(
    userForToken,
    "abc",
    { expiresIn: 60 * 60 }
  )
  response.status(200).send({ token, savedUser })
});

//Login
userRouter.post('/login', async (request, response) => {
  const { username, password } = request.body
  const user = await User.findOne({ username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid username or password'
    })
  }
  const userForToken = {
    username: user.username,
    id: user._id,
  }
  const token = jwt.sign(
    userForToken,
    "abc",
    { expiresIn: 60 * 60 }
  )
  console.log(token)
  response
    .status(200)
    .send({ token, user })
})

userRouter.get("/exercises/:token", async (request, response) => {
  const decodedToken = jwt.decode(request.params.token, { complete: true })

  if (!decodedToken) {
    return response.status(401).json({ error: 'token decode failed' })
  }

  if (!decodedToken.payload.id) {
    return response.status(401).json({ error: 'token not found' })
  }
  const user = await User.findById(decodedToken.payload.id)
  return response.status(200).send(user.exerciseDeck)
});

module.exports = userRouter;