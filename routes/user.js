const {register} = require('../controller/user')
const {login,follow,unfollow}= require('../controller/user')
const authenticatetoken=require('../middleware/authenticate')
const express = require('express')
const router = express.Router()

router.post('/signup',register)
router.post('/login',login)
router.post('/follow/:id',authenticatetoken,follow)
router.post('/unfollow/:id',authenticatetoken,unfollow)

module.exports = router 