const dotenv=require("dotenv").config()
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const mongoose =require("mongoose")
const express=require("express")
const { users, blacklisting } = require("../Model/userModel")

const userRoute=express.Router()

userRoute.post("/signIn",async(req,res)=>{
    try {
        const {name,email,pass}=req.body
        const user=await users.findOne({email})
        if(user){
            res.status(404).send("This email allready register")
        }
        else{
            bcrypt.hash(pass,5,async function(err,hash){
                if(err){
                    res.status(404).send({msg:"error while hashing",err})
                }else{
                    const newUser=new users({name,email,pass:hash})
                    await newUser.save()
                    res.status(200).send("User register successfull")
                }
            })
        }
    } catch (error) {
        res.status(400).json(error)
    }
})

userRoute.post("/login",async(req,res)=>{
    try {
        const {email,pass}=req.body
        const user=await users.findOne({email})
        if(user){   
           bcrypt.compare(pass,user.pass,function(err,result){
            if(result){
                const token=jwt.sign({id:user.id},process.env.key,{expiresIn:"1d"})
                res.status(200).send({msg:"login successfull",token:token})
            }
            else{
                res.status(404).send("wrong credentials")
            }
           
           })
        }else{
            res.status(400).send("user not found Plz signin first")
            
        }
    } catch (error) {
        res.status(400).json(error)
    }
})


userRoute.get("/logout",async(req,res)=>{
    try {
        if(req.headers.authorization){
           const token=req.headers.authorization?.split(" ")[1]
           if(token){
            const blacklistedToken=await blacklisting.findOne({token})
            if(blacklistedToken){
                res.status(200).send("User allready logout")
            }
            else{
                const blacklistedToken=new blacklisting({token})
                await blacklistedToken.save()
               res.status(200).send("logout successfull")
            }
           }else{
            res.status(404).send("Token missing . plz login.")
           }
        }else{
            res.status(404).send("Token missing")
        }
    } catch (error) {
        res.status(400).json(error)
    }
})



module.exports={userRoute}