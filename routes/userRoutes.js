const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController')

userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userController.register);


module.exports = userRouter;