const express = require('express');
const router = express.Router();
let users=require('../controllers/usersController')

router.get('/register',users.get_register);
router.post('/register',users.post_register);

router.get('/login', users.get_login);


router.post('/login', users.post_login);

router.get('/logout', users.get_logout);

router.get('/getUser',users.checkAuthentication, users.get_user);
module.exports = router;
