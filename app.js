const express = require('express')
const mongoose = require('mongoose')
const User = require("./models/user")

//2. create express app

const app = express();

 //5. Middleware

 app.use(express.json())

 //define routes

app.get('/users', async(req, res) => {

try {
    //find({}, matching query, {projection})
    const users = await User.find({}, {_id: 0, __v: 0, password: 0});
    res.status(200).json(users);
} catch (error) 
{
    res.status(500).send({message: error.message })
}

})




  //exporting the app to index.js

 module.exports= app;



 //models means schema - structure
