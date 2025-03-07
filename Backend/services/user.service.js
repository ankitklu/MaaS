const userModel = require('../models/user.model');  // ✅ Import userModel

module.exports.createUser = async (userData) => {
    console.log("Received data:", userData);  // Debugging log

    const { fullname, email, password } = userData;

    if (!fullname?.firstname || !email || !password) {
        console.error("Validation failed: Missing fields");
        throw new Error("All fields are required");
    }

    const user = await userModel.create({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname || "",
        },
        email,
        password
    });

    return user;
};
