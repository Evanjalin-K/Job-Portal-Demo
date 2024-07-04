const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController')

userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userController.register);

//url params
userRouter.get('/:id', userController.getUserById); 

//query params


module.exports = userRouter;