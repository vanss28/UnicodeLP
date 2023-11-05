const User = require('../model/user')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const sendmail=require('./nodemailer')

const register = async (req,res)=>{
    try{
        const user=new User({
            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
            number:req.body.number,
        })
        user.password=await bcrypt.hash(user.password, 10)
        const user1=await user.save()
        res.send("Sign up successfull")
    }
    catch(error){
        res.status(500).send(error)
    }
}

const login = async (req,res) => {
    try{
        const { gmail, password } = req.body;
        const user = await User.findOne({gmail:gmail})
        
        if (user) {
            const validpassword = await bcrypt.compare(password,user.password)
            if (validpassword) {
                const token=jwt.sign({_id:user._id},process.env.Access_Token,{expiresIn: "3h"})
                res.json(token);
                sendLogin();
            }
            else {
                return res.send("Invalid Password");
            }
        }
        else {
            return res.send("cannot find user")
        }
    }
    catch(error){
        res.send(error)    
    }
}



const follow=async(req,res)=>{
    try {
        const followuser= await User.findById(req.params.id)
        const followinguser= await User.findById(req.user._id)
        if(!followuser || !followinguser){
            return res.send("Wrong user id")
        }
        followuser.followers.push(req.user._id)
        followinguser.following.push(req.params.id)
        await followuser.save()
        await followinguser.save()
        res.send("Followed")
    } catch (error) {
        res.status(500).send(error)        
    }
}
const getusers=async(req,res)=>{
    try {
        const user=await User.find()
        res.json(user)
    } catch (error) {
        res.send("Error")
    }
}

const unfollow=async(req,res)=>{
    try {
        const followuser= await User.findById(req.params.id)
        const followinguser= await User.findById(req.user._id)
        if(!followuser || !followinguser){
            return res.send("Wrong user id")
        }
        followuser.followers.pull(req.user._id)
        followinguser.following.pull(req.params.id)
        await followuser.save()
        await followinguser.save()
        res.send("Unfollowed")
    } catch (error) {
        res.status(500).send(error)        
    }
}
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})
const profilePic= async(req,res)=>{
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const profilePicUrl = result.secure_url;

        const user = await User.findById(req.user._id);
        user.profilePicUrl = profilePicUrl;
        await user.save();
        return res.send("Profile picture uploaded ");
    } catch (error) {
        return res.status(500).send(error);
    }
}
const deleteUser=async(req,res)=>{
    try {
        const user=await User.findById(req.user._id)
        const u1=await user.deleteOne()
        res.send("User deleted ")
    } catch (error) {
        res.status(500).send("Error ")
    }
}
const getFollower=async(req,res)=>{
    try {
        const user =await User.findById(req.user._id)
        res.send(user.followers)
    } catch (error) {
        res.status(500).send("Error")
    }
}
const updateUser=async(req,res)=>{
    try {
        const user=await User.findByIdAndUpdate(req.user._id,req.body,)
        res.send("Updated ")
    } catch (error) {
        res.status(500).send("NOT UPDATED")
    }
}



module.exports ={
    register,
    login,
    follow, 
    unfollow,
    profilePic,deleteUser,getFollower,updateUser,getusers
}