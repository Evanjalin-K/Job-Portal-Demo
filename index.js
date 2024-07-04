//1. import express module
const mongoose = require('mongoose')

// imported app.js 
const app = require('./app')

//importing dotenv and utils
const { MONGODB_URL, PORT } = require('./utils/config')

// Importing PORT 


//4. Create a route - creating database

console.log('Connecting to MongoDB......');

// this is asynchronous function
mongoose.connect(MONGODB_URL)


.then(()=> {
  console.log(`connected to MongoDB`);

  //after connecting to MongoDB, start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});

})

.catch((error) => {
  console.log(`Error connect to MongoDB`,error);
});

