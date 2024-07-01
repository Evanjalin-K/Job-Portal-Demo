//1. import express module
const mongoose = require('mongoose')

// imported app.js 
const app = require('./app')


//4. Create a route - creating database

console.log('Connecting to MongoDB......');

// this is asynchronous function
mongoose.connect(`mongodb+srv://jojaev510:White05@cluster0.vq2ewgt.mongodb.net/`)


.then(()=> {
  console.log(`connected to MongoDB`);

  //after connecting to MongoDB, start the server
  app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001')
});

})

.catch((error) => {
  console.log(`Error connect to MongoDB`,error);
});






// app.get('/posts',(request,response) => {
//     response.json(posts);
// })

// app.post('/posts', (request, response) => {

//   // pusing all the new item in the existing array of objects

//     posts.push(
//       {
//       ...request.body,
//       id: posts.length + 1
//     }
//   );
//   response.json(
//     {
//       ...request.body,
//       id: posts.length

//     }
//   )
// })

// app.put('/posts/:id', (request, response) => {

//      const id = request.params.id;

//      //request data, editing data
//      let updatedpost = request.body;
//      // finding the id from the post, where id = params.id
//      const toUpdatePost = posts.find(post => post.id == id);
//      // spreading to updat
//      updatedpost = {
      
//       ...toUpdatePost, 
//       ...updatedpost
//      } // updating post will get

     // inserting the updated data to the posts object
     // in post, it will search the id of data to be inserted and insert to the correct place

     //3.run the server

