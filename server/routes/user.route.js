const express = require('express');
const userController = require('../controller/user.controller');
const router =express.Router();

router.get('/test', userController.test);
router.post("/register",userController.register)
router.post("/login",userController.login)

module.exports = router;