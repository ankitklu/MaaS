const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require("express-validator");  // ✅ Correct import
const blackListTokenModel = require('../models/blackListToken.model');

module.exports.registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        console.log("Request body:", req.body); // Debugging log

        const { fullname, email, password } = req.body;

        if (!fullname || !fullname.firstname || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const hashedPassword = await userModel.hashPassword(password);

        const user = await userService.createUser({
            fullname, // Pass the fullname object correctly
            email,
            password: hashedPassword
        });

        const token = user.generateAuthToken();
        res.status(201).json({ token, user });
    } catch (error) {
        console.error("Error in registerUser:", error.message);
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports.loginUser = async(req, res, next)=>{
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {email, password} = req.body;

        const user = await userModel.findOne({email}).select('+password');

        if (!user) {
            return res.status(401).json({message: "Invalid email or password"});
        }

        const isMatch = await user.comparePassword(password); // we made it in user.model.js

        if(!isMatch){
            return res.status(401).json({message: "Invalid email or password"});
        }

        const token = user.generateAuthToken();

        res.cookie('token', token);

        res.status(200).json({token, user});
          

}

module.exports.getUserProfile = async(req, res, next)=>{
    res.status(200).json(req.user);
}

module.exports.logoutUser = async(req, res, next)=>{
    res.clearCookie('token');

    const token= req.cookies.token || req.headers.authorization.split(' ')[1];
    await blackListTokenModel.create({token});

    res.status(200).json({message: "Logged out successfully"});
}