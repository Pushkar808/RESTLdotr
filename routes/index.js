const express = require('express');
const userRoute = require("../routes/v1/users/userRoute")
const blogRoute = require("../routes/v1/blogs/blogRoute")
const router = express.Router();

router.use('/users', userRoute);
router.use('/blogs', blogRoute);

module.exports = router;