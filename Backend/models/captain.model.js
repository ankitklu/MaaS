const mongoose= require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minLength: [3, 'First name must be at least 3 characters long'],
        },
        lastname:{
            type: String,
            minLength: [3, 'Last name must be at least 3 characters long'],
        },
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
        minLength: [5, 'Email must be at least 5 characters long'],
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    socketId:{
        type: String,
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minLength: [3, 'Color must be at least 3 characters long'],
        },
        plate:{
            type: String,
            required: true,
            minLength: [3, 'Plate must be at least 3 characters long'],
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1'],
        },
        vehicleType:{
            type: String,
            enum: ['car', 'motorcycle','auto'],
            required: true,
        },
    },
    location:{
        lat:{
            type: Number,
        },
        lng:{
            type: Number,
        }
    }
});


captainSchema.methods.generateAuthToken = function(){
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
};

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
};  

captainSchema.statics.hashPassword = async function(password){  
    return await bcrypt.hash(password, 10);
};



const captainModel = mongoose.model('Captain', captainSchema);
module.exports = captainModel;

// {
//     "fullname": {
//         "firstname": "John",
//         "lastname": "Doe"
//     },
//     "email": "john.doe@example.com",
//     "password": "SecurePass123",
//     "socketId": "abcd1234",
//     "status": "active",
//     "vehicle": {
//         "color": "Blue",
//         "plate": "ABC123",
//         "capacity": 4,
//         "vehicleType": "car"
//     },
//     "location": {
//         "lat": 37.7749,
//         "lng": -122.4194
//     }
// }
