const Comment=require('../model/comment')

const addcomment= async(req,res)=>{
    try {
        const {comment,answer,question}=req.body
        const user=req.user._id
        let newcomment
        if(answer){
            newcomment=new Comment({comment,user,answer})
        }
        else if(question){
            newcomment=new Comment({comment,user,question})
        }
        else{
            res.send("mention where you want to add the comment")
        }
        const savecomment= await newcomment.save()
        res.send("Commented")
    } catch (error) {
        res.status(500).send(error)
    }
}

const getcomment=async(req,res)=>{
    try {
        const comm= await Comment.find().populate('user')
        res.send(comm)
    } catch (error) {
        res.status(500).send("Error ")
    }
}
const deletecomment=async(req,res)=>{
    try {
        const comm=await Comment.findById(req.body.id)
        const c1=await comm.deleteOne()
        res.send("Comment deleted ")
    } catch (error) {
        res.send("Error")
    }
}
const updatecomment=async(req,res)=>{
    try {
        const user=await Comment.findByIdAndUpdate(req.params.id,req.body,)
        res.send("Updated")
    } catch (error) {
        res.status(500).send("not updated")
    }
}

module.exports={ addcomment,getcomment,deletecomment,updatecomment}