const express = require('express')
const User = require("./models/user")
const userRouter = require('./routes/userRoutes')

//2. create express app

const app = express();

 //5. Middleware

 app.use(express.json())

 //define routes

app.use('/users', userRouter);

  //exporting the app to index.js

 module.exports= app;

 //models means schema - structure
