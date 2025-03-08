const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const {validationResult} = require('express-validator');
const blackListTokenModel = require('../models/blackListToken.model');

module.exports.registerCaptain = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password, vehicle } = req.body;

        // Log the email being checked
        console.log(`Checking if email exists: ${email}`);

        const isCaptainAlreadyExist = await captainModel.findOne({ email });

        console.log(isCaptainAlreadyExist ? "Captain already exists" : "Captain does not exist");

        if (isCaptainAlreadyExist) {
            return res.status(400).json({ message: "Captain already exists" });
        }

        const hashedPassword = await captainModel.hashPassword(password);

        const captain = new captainModel({
            fullname: {
                firstname: fullname.firstname,
                lastname: fullname.lastname
            },
            email,
            password: hashedPassword,
            vehicle: {
                color: vehicle.color,
                plate: vehicle.plate,
                capacity: vehicle.capacity,
                vehicleType: vehicle.vehicleType
            }
        });

        await captain.save(); // ⛔ This will throw a duplicate key error if email already exists

        const token = captain.generateAuthToken();
        return res.status(201).json({ token, captain });

    } catch (error) {
        if (error.code === 11000) {  // ⛔ MongoDB duplicate key error
            return res.status(400).json({ message: "Captain already exists" });
        }
        next(error);
    }
};

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel.findOne({
        email
    }).select('+password');

    if (!captain) {
        return res.status(401).json({ message: "Invalid email or password" });
    }   

    const isMatch = await captain.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = captain.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ token, captain });
};

module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json({captain: req.captain});
};

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    await blackListTokenModel.create({ token });

    res.clearCookie('token');
    res.status(200).json({ message: "Logged out successfully" });
}
