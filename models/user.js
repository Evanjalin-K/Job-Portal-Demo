const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('User', userSchema, 'users')

//module has 3 arguments models file name user, mongoose created name, collection name users