require('dotenv').config();

const User = require('../models/user');

const bcrypt = require('bcrypt');

const saltRounds = 10;

const createAdminService = async (email, password, fullName, avatar) => {
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            return {
                EC: 1,
                EM: `Email ${email} has been existed`,
            };
        }
        const defaultAvatar = 'http://localhost:8080/public/images/default-avatar.png';
        const userAvatar = avatar || defaultAvatar;

        const hashPassword = await bcrypt.hash(password, saltRounds);

        let result = await User.create({
            email: email,
            password: hashPassword,
            fullName: fullName,
            avatar: userAvatar,
            isAdmin: true,
            favortites: [],
            tours: [],
        });

        return {
            EC: 0,
            EM: 'Register success',
            data: result,
        };
    } catch (error) {
        console.log(error);
        return {
            EC: 2,
            EM: 'An error occurred',
        };
    }
};

module.exports = {
    createAdminService,
};
