const express=require('express')
const mongoose=require('mongoose')
const validator = require('validator');
const morgan = require('morgan');
const bodyParser = require('body-parser');
s

require('dotenv').config()
require('./connection')

const PORT = process.env.PORT || 3000;

const app=express()
app.use(express.json())


const userRouter = require('./routes/user')
app.use('/user',userRouter)

const questionRouter=require('./routes/question')  
app.use('/question',questionRouter)

const answerRouter=require('./routes/answer')  
app.use('/answer',answerRouter)

const commentRouter=require('./routes/comment')  
app.use('/comment',commentRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});