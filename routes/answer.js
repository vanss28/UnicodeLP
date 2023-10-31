const {ans,upvote,downvote}= require('../controller/answer')
const authenticatetoken=require('../middleware/authenticate')
const express = require('express')
const router = express.Router()

router.post('/answer',authenticatetoken,ans)
router.post('/upvote/:id',authenticatetoken,upvote)
router.post('/downvote/:id',authenticatetoken,downvote)

module.exports=router