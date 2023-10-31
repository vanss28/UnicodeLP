const {addcomment}=require('../controller/comment')
const authenticatetoken=require('../middleware/authenticate')
const express=require('express')
const router=express.Router()

router.post('/comment',authenticatetoken,addcomment)

module.exports=router