const mongoose = require('mongoose');
const User = require('./user'); // Assuming this is where your User model is defined

const companySchema = new mongoose.Schema({
    name: String,
    location: String,
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Company', companySchema, 'companies')