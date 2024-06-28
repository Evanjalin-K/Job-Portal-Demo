//1. import express module
const express = require('express')

//2. create express app

const app = express();

//4. Create a route

app.get('/',(request,response) => {
    response.send("Hello Node.js!");
})

//3.run the server

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001')
});