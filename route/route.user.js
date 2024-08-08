const Register=require("../model/register.model")
const bcrypt=require("bcrypt")
const express=require("express")
const jwt=require("jsonwebtoken")
const router=express.Router()

router.post("/register",async(req,res)=>{
    let {name,email,password,role}=req.body
    try{
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
                res.status(400).send("error in hashing")
            }
            if(hash){
                let user=new Register({
                    name,
                    email,
                    password:hash,
                    role
                })
                await user.save()
                res.status(200).send("register successfully...")
            }
        })
    }catch(err){
        res.status(400).send(`${err} in register`)
    }
})

router.post("/login",async (req,res)=>{
    let {email,password}=req.body

    try{
        let user=await Register.findOne({email})
        if(!user){
            res.status(400).send("register once agian or you enterd email and password is inccorect")
        }
        bcrypt.compare(password,user.password,(err,result)=>{
            if(err){
                res.status(400).send("you enterd password is incoorect")
            }
            if(result){
                let token=jwt.sign({id:user._id},"masai")
                res.status(200).json({token})
            }
        })
    }catch(err){
        res.status(400).send("enter email and password correctly")
    }
})

module.exports=router