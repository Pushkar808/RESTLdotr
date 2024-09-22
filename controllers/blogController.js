const blogModel = require('../models/blogModel');

exports.fetchBlogs = async (req, res, next) => {
    try {
        return await blogModel.fetchBlogs(req, res);
    } catch (error) {
        console.error('Error in getting Data:', error); // Log any errors
        return res.status(500).json({
            status: false,
            message: "Internal Server Error",
            data: null
        });
    }
};

exports.deleteBlog = async (req, res, next) => {
    try {
        return await blogModel.deleteBlog(req, res);
    } catch (error) {
        console.error('Error in getting Data:', error); // Log any errors
        return res.status(500).json({
            status: false,
            message: "Internal Server Error",
            data: null
        });
    }
};

exports.updateBlog = async (req, res, next) => {
    try {
        return await blogModel.updateBlog(req, res);
    } catch (error) {
        console.error('Error in getting Data:', error); // Log any errors
        return res.status(500).json({
            status: false,
            message: "Internal Server Error",
            data: null
        });
    }
};

exports.createBlog = async (req, res, next) => {
    try {
        return await blogModel.createBlog(req, res);
    } catch (error) {
        console.error('Error in getting Data:', error); // Log any errors
        return res.status(500).json({
            status: false,
            message: "Internal Server Error",
            data: null
        });
    }
};