const dotenv=require("dotenv").config()
const mongoose=require("mongoose")
const register=require("./route/route.user")
const express=require("express")
const router=require("./route/route.user")
const library=require("./route/route.library")
const check=require("./middleware/check.middleware")

const app=express()
app.use(express.json())
app.use("/user",router)
app.use("/lib",check,library)
app.listen(process.env.PORT,async ()=>{
    try{
        await mongoose.connect(process.env.URL)
        console.log(`hosted on ${process.env.PORT} and also connected with mongodb`)
    }catch(err){
        console.log(err)
    }
})