const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('connect to database successfully')
    })
    .catch(err => console.log(err.message))