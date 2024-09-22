const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        age: { type: Number, required: true },
    },
    {
        timestamps: true // This adds createdAt and updatedAt fields
    }
);

const Users = mongoose.model('Users', userSchema);
module.exports = Users;