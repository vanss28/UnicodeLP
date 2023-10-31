const mongoose= require('mongoose')
const Schema=mongoose.Schema

const answerSchema=new Schema({
    answer:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    question:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Question',
        required:true,
    },
    upvote:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',default:0
    }],
    downvote:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',default:0
    }]
})

module.exports=mongoose.model('Answer',answerSchema)