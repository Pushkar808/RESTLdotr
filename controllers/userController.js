const usersModel = require('../models/userModel');

exports.fetchallUsers = async (req, res, next) => {
    try {
        return await usersModel.fetchallUsers(req, res);
    } catch (error) {
        console.error('Error in getting Data:', error); // Log any errors
        return res.status(500).json({
            status: false,
            message: "Internal Server Error",
            data: null
        });
    }
};
exports.getUserByEmail = async (req, res, next) => {
    try {
        return await usersModel.getUserbyEmail(req, res);
    } catch (error) {
        console.error('Error in getting Data:', error); // Log any errors
        return res.status(500).json({
            status: false,
            message: "Internal Server Error",
            data: null
        });
    }
};
exports.setUser = async (req, res, next) => {
    try {
        return await usersModel.setUser(req, res);
    } catch (error) {
        console.error('Error in getting Data:', error); // Log any errors
        return res.status(500).json({
            status: false,
            message: "Internal Server Error",
            data: null
        });
    }
};