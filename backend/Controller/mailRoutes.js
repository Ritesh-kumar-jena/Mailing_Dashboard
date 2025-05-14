const dotenv=require("dotenv").config()
const mongoose =require("mongoose")
const express=require("express")
const { auth } = require("../Middelware/auth")
const { mails } = require("../Model/mailModel")


const mailRoute=express.Router()
mailRoute.use(auth)

mailRoute.get("/",async(req,res)=>{
    try {
        const data =await mails.find()
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

mailRoute.post("/add",async(req,res)=>{
    try {
        const data =req.body
        const mail= new mails(data)
        await mail.save()
        res.status(200).send({msg:"mail add successfully",mail})
    } catch (error) {
        res.status(400).send(error)
    }
})





module.exports={mailRoute}