const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

userRouter.get('/', auth.verifyToken, userController.getAllUsers);
userRouter.post('/', userController.register);

//url params


userRouter.get('/:id', userController.getUserById); 

// here we can use get method also, but we have to define above get/:id
userRouter.post('/login', userController.login)

userRouter.post('/logout', userController.logout)





module.exports = userRouter;