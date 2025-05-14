const path=require("path")
const dotenv=require("dotenv").config()
const cors=require("cors")
const express=require("express")
const { connection } = require("./db")
const { userRoute } = require("./Controller/userRoutes")
const { mailRoute } = require("./Controller/mailRoutes")
const port=process.env.port


const app=express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    try {
        res.status(200).send("Wellcom to Mailing Dashboard")
    } catch (error) {
        res.status(400).send(error)
    }
})

app.use("/users",userRoute)
app.use("/mail",mailRoute)

app.listen(port,async()=>{
    try {
        await connection
        console.log(`server is running on port:- ${port} and connected to Mailing_Dashboard database`)
    } catch (error) {
        console.log(error)
    }
})