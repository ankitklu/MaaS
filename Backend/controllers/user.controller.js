const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require("express-validator");  // ✅ Correct import

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
