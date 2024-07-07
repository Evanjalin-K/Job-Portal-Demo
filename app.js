const express = require('express')
const User = require("./models/user")
const userRouter = require('./routes/userRoutes')
const companyRouter = require('./routes/companyRoutes');
const cookieParser = require('cookie-parser');

//2. create express app

const app = express();

//parse the cookies of request

app.use(cookieParser());

 //5. Middleware/parse the body of the request

 app.use(express.json())

 //define routes

app.use('/users', userRouter);


app.use('/', companyRouter);
  //exporting the app to index.js

 module.exports= app;

 

 //models means schema - structure
