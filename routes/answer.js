const {ans,upvote,downvote,deleteanswer,updateanswer}= require('../controller/answer')
const authenticatetoken=require('../middleware/authenticate')
const express = require('express')
const router = express.Router()

router.post('/answer',authenticatetoken,ans)
router.post('/upvote/:id',authenticatetoken,upvote)
router.post('/downvote/:id',authenticatetoken,downvote)
router.delete('/deleteanswer',authenticatetoken,deleteanswer)
router.patch('/updateanswer',authenticatetoken,updateanswer)


module.exports=router