const mongoose= require('mongoose')
const Schema=mongoose.Schema

const questionSchema=new Schema({
    question:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    answer:[{
        type: String,
        ref:'Question'
    }]
})

module.exports=mongoose.model('Question',questionSchema)