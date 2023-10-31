const mongoose=require('mongoose')
const Schema= mongoose.Schema

const commentSchema=new Schema({
    comment:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    answer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Answer'
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    },
},
    { timestamps:true }
)
module.exports=mongoose.model('Comment',commentSchema)