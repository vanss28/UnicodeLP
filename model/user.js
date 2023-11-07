const mongoose= require('mongoose')
const validator=require('validator')
const Schema=mongoose.Schema

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new error("Invalid e-mail id")
            }
        }
    },
    number:{
        type:Number,
        unique:true,
        required:true,
    },
    followers:[{
        type: mongoose.Schema.Types.ObjectId,ref:'User',default:0
    }],
    following:[{
        type: mongoose.Schema.Types.ObjectId,ref:'User',default:0
    }],
    profilePicUrl: {
        type: String 
    },
})



module.exports=mongoose.model('User',userSchema)