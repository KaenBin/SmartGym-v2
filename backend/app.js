const express = require('express');
require('dotenv').config();
require('./models/db')

const app = express()

const userRouter = require('./controllers/userController')
const exerciseRouter = require('./controllers/exerciseController')

app.use(express.json());

app.use('/', userRouter);
app.use('/MyExercise', exerciseRouter);

app.listen(8000, () => {
    console.log('port 8000 is listening');
})