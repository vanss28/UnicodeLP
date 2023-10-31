const{ askQuestion,getQuestions,filterByCategory,filterByUserId } = require('../controller/question')

const authenticatetoken=require('../middleware/authenticate')
const express = require('express')
const router = express.Router()

router.post('/askQuestion',authenticatetoken,askQuestion)
router.get('/getQuestions',authenticatetoken,getQuestions)
router.post('/filter1',filterByCategory)
router.post('/filter2',filterByUserId)

module.exports=router