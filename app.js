const express = require('express')

//2. create express app

const app = express();

 //5. Middleware

 app.use(express.json())

 module.exports= app;

 //exporting the app to index.js
