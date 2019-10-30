const express = require('express');
const router = express.Router();

let users=require('../controllers/users')



router.get('/register',users.get_register);
router.post('/register',users.post_register);


module.exports = router;
