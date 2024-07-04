const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController')

userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userController.register);

//url params


userRouter.get('/:id', userController.getUserById); 

// here we can use get method also, but we have to define above get/:id
userRouter.post('/login', userController.login)




module.exports = userRouter;