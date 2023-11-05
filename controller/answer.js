const Answer=require('../model/answer')
const Question=require('../model/question')


const ans= async(req,res)=>{
    const answer=new Answer({
        answer:req.body.answer,
        user:req.body.user,
        question:req.body.question
    })
    try{
         const question= await Question.findById(req.body.question)
         question.answer.push(req.body.answer)
        const ans=await answer.save()
        await question.save()
        res.send("You've answered!")
    }
    catch(error){
        res.status(500).send("Unable to answer"+error)
    }
}

const upvote=async(req,res)=>{
    try {
        const answer=await Answer.findById(req.params.id)
        if(!answer){
            return res.send("Wrong user")
        }
        answer.upvote.push(req.user._id)
        await answer.save()
        res.send("Upvoting sent")
    } catch (error) {
        res.status(500).send(error)
    }
}
const downvote=async(req,res)=>{
    try {
        const answer=await Answer.findById(req.params.id)
        if(!answer){
            return res.send("Wrong user")
        }
        answer.downvote.push(req.user._id)
        await answer.save()
        res.send("Downvoting sent")
    } catch (error) {
        res.status(500).send(error)
    }
}
const deleteanswer=async(req,res)=>{
    try {
        const ans=await Answer.findById(req.body.id)
        const q1=await ans.deleteOne()
        res.send("Answer deleted ")
    } catch (error) {
        res.send("Error")
    }
}
const updateanswer=async(req,res)=>{
    try {
        const user=await Answer.findByIdAndUpdate(req.params.id,req.body,)
        res.send("Answer Updated")
    } catch (error) {
        res.status(500).send("not updated")
    }
}

module.exports={ 
    ans,
    upvote,
    downvote,
    deleteanswer,
    updateanswer
 }