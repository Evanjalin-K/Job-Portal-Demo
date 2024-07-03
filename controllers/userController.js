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
        
        }
}

module.exports = userController;