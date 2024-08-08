const mongoose=require("mongoose")

const registerSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true,default:"admin",enum:["admin","manager","member"]}
},{versionKey:false})

const Register=mongoose.model("Register",registerSchema)

module.exports=Register