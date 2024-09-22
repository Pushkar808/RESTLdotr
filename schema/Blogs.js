const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        blogText: { type: String, required: true },
    },
    {
        timestamps: true // This adds createdAt and updatedAt fields
    }
);

const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;