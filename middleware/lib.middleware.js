const Register=require("../model/register.model")
function send(list){
    return async (req,res,next)=>{
        try{
            let id=req.id
            let {role}= await Register.findById(id)
            
            if(list.includes(role)){
                next()
            }else{
                res.status(400).send("your not elgiable to access this route")
            }
        }catch(err){
            res.status(400).send("not enterd password correct")
        }
    }
}

module.exports=send