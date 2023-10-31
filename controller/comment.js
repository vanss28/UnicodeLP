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
        res.send("Comment added")
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports={ addcomment}