const express = require('express');
const blogController = require('../../../controllers/blogController')

const router = express.Router();

router.get('/fetchBlogs', blogController?.fetchBlogs);
router.delete('/deleteBlog/:id', blogController?.deleteBlog);
router.put('/updateBlog', blogController?.updateBlog);
router.post('/createBlog', blogController?.createBlog);

module.exports = router;