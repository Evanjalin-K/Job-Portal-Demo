// Define the controller for user
const User = require('../models/user')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userController = {

    getAllUsers: async(req, res) => {

        try {

            const { email } = req.query;
            if(email) {
                //find the user by email

                const user = await User.findOne({email});

                if(!user){
                    return res.status(404).send({ message: "User not found"})
                }
                return res.status(200).json(user)
            }
           // If no query
            //find({}, matching query, {projection})
            const users = await User.find({});
            res.status(200).json(users);
        } catch (error) 
        {
            res.status(500).send({message: error.message })
        }  
      },

      register: async (req, res) => {
        try {
            //get the user input from the req body
            const {name, email, password} = req.body;

            //Check if the user already exist in the database with same email

            const user = await User.findOne({email})

            //if the user exist, return an error response

            if(user){
                return res.status(400).send({ message: 'User already exists'});
            }

            //hash the password

            const hashPassword = await bcrypt.hash(password,10);

            // create a new user

            const newUser = new User({name, email, password: hashPassword});

            //save the user 
            const savedUser = await newUser.save();

            res.status(201).send({ message: 'User Created Successfully',
                user: savedUser
            });

        } catch (error) {
            res.status(500).send({ message: error.message});
            
        }
      },
      getUserById: async (req, res) => {
          try {
              const userId = req.params.id;
      
              if (!mongoose.Types.ObjectId.isValid(userId)) {
                  return res.status(404).send({ message: 'User not found' });
              }
      
              const foundUser = await User.findById(userId);
      
              if (!foundUser) {
                  return res.status(404).send({ message: 'User not found' });
              }
      
              res.status(200).json(foundUser);
          } catch (error) {
              console.error('Error finding user:', error);
              res.status(500).send({ message: 'Internal server error' });
          }
      },

      login: async (req, res) =>
        {
        try {
            //GET the user email and password

            const {email,password} = req.body;

            //Check if the user exist in the database

            const user = await User.findOne({email});

            // If user does not exist, return an error response

            if(!user) {
                return res.status(404).send({ message: 'User not found'});
            }

            // if the user exist, compare the password

            const isPasswordValid = await bcrypt.compare(password, user.password)

            // if password is invalid, return an error message
             if(!isPasswordValid)
            {
                return res.status(400).send({ message:'Invalid Password'})
            }

            res.status(200).send({message:'Login Successful'})
            
        } catch (error) {
            res.status(500).send({message: error.message})
        }
      }
    }      
module.exports = userController;