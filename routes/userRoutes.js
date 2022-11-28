const express = require('express');
const router = express.Router();

const userController = require('../controllers/usersController');

router.get('/users', userController.index);

module.exports = router;