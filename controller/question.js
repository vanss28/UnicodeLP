const Question= require('../model/question')

const askQuestion=async (req,res)=>{
    try{
        const question=new Question({
            question:req.body.question,
            category:req.body.category,
            user:req.body.user
        })
        const ques=await question.save()
        res.send("Question posted successfully")
    }
    catch(error){
        res.status(500).send("Unable to ask question")
    }
}

const getQuestions=async(req,res)=>{
    try{
           const questions= await Question.find(req.query)
           res.json(questions)
    }
    catch(error){
        res.send(error)
    }
}
const filterByCategory = async(req, res) => {
    filteredQuestions = await Question.find({
        category : req.body.category
    });

    filteredQuestions.forEach((question) => {
        res.send(filteredQuestions)
    });
}

const filterByUserId = async(req, res) => {
    filteredQuestions = await Question.find({
        category : req.body.category
    });

    filteredQuestions.forEach((user) => {
        res.send(filteredQuestions)
    })
}
module.exports={
   askQuestion,
   getQuestions,
   filterByCategory,
   filterByUserId

}