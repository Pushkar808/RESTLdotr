const express = require('express');
const userController = require('../../../controllers/userController')

const router = express.Router();

router.get('/', userController.fetchallUsers);
router.post('/setUserdata', userController.setUser);
router.get('/getUserbyemail', userController.getUserByEmail);

module.exports = router;