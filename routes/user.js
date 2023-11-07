const {register} = require('../controller/user')
const {login,follow,unfollow,profilePic,deleteUser,getFollower,updateUser,getusers}= require('../controller/user')
const authenticatetoken=require('../middleware/authenticate')
const express = require('express')
const router = express.Router()

router.post('/signup',register)
router.post('/login',login)
router.post('/follow/:id',authenticatetoken,follow)
router.post('/unfollow/:id',authenticatetoken,unfollow)
router.post('/uploadpic',authenticatetoken,upload.single('image'),profilePic)
router.delete('/deleteuser',authenticatetoken,deleteUser)
router.get('/getfollower',authenticatetoken,getFollower)
router.patch('/updateuser',authenticatetoken,updateUser)
router.get('/getuser',authenticatetoken,getusers)

module.exports = router 