const mongoose=require("mongoose")

const mailSchema=mongoose.Schema({
    senderName:{type:String,required:true},
    senderEmail:{type:String,required:true},
    subject:{type:String,required:true},
    content:{type:String,required:true},
    timestamp:{type:String,required:true},
    catagory:{
        type:String,
        required:true,
        default:"read",
        enum:["read","unread"]
    },
    specification:{
        type:[String],
        default:[]
    }
    
},{versionKey:false})

const mails=mongoose.model("mail",mailSchema)


module.exports={mails} 