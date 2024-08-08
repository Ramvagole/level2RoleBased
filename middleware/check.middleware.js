const jwt=require("jsonwebtoken")

function check(req,res,next){
    let token=req.headers.authorization
    console.log(token)
    if(!token){
        res.status(400).send("not enterd correct token")
    }
    
    jwt.verify(token,"masai",(err,decode)=>{
        if(err){
            res.status(400).send("error in token")
        }
        req.id=decode.id
        next()
    })
}

module.exports=check