const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String, 
            required: true,
            minLength: [3, 'First name must be at least 3 characters long'],
        },
        lastname: {
            type: String, 
            minLength: [3, 'Last name must be at least 3 characters long'],
        },
    },
    email: {
        type: String, 
        required: true,
        unique: true,
        minLength: [5, 'Email must be at least 5 characters long'],
    },
    password: {
        type: String,  // Fixed typo
        required: true,
        select: false, // Ensure password is not fetched by default
    },
    // For live tracking
    socketId: {
        type: String,
    }
});

// Fixing the typo in function declaration
userSchema.methods.generateAuthToken = function() {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
};

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password); // Compare input password with stored password
};

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model('User', userSchema);

// Fixed incorrect export
module.exports = userModel;
