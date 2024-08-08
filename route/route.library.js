const express=require("express")
const send=require("../middleware/lib.middleware")
const library=express.Router()

library.get("/admin",send(["admin"]),(req,res)=>{
    res.status(200).send("admin can access")
})

library.get("/manager",send(["manager"]),(req,res)=>{
    res.status(200).send("manager can access")
})

library.get("/member",send(["member"]),(req,send)=>{
    res.status(200).send("member can access")
})
module.exports=library
