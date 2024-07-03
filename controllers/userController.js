// Define the controller for user
const User = require('../models/user')
const userController = {

    getAllUsers: async(req, res) => {

        try {
            //find({}, matching query, {projection})
            const users = await User.find({}, {_id: 0, __v: 0, password: 0});
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

            // create a new user

            const newUser = new User({name, email, password});

            //save the user 
            const savedUser = await newUser.save();

            res.status(201).send({ message: 'User Created Successfully',
                user: savedUser
            });

        } catch (error) {
            res.status(500).send({ message: error.message});
            
        }
      }
}

module.exports = userController;