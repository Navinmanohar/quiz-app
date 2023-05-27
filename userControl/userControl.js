const userdata=require('../db/userData')
const jwt =require("jsonwebtoken")
const {v4:uuid}=require("uuid")

    

const SECRET_TOKEN="b14c1a2acd8de925c8fa580df2dc83809f970e6d34212e76fdafd06240afcaca73ac37eb119d35555e41a502e8c545db1e2e0fda3adb33c2dde64e118877a26e"
const userVerify=(req,res,next)=>{
      const user=req.headers.authentication;

}
const userSignHandler=(req,res)=>{
    const {password,email}=req.body;
    const authToken=jwt.sign({id:email},SECRET_TOKEN)
    const authentication=userdata.data.some(user=>user.email===email&&user.password===password);
    if(authentication)
     res.json({authToken, message:"user already exists"})
     else{
        const newUser={id:uuid(),password,email}
        userdata.data.push(newUser);
        res.json({message:`user added ${email}::${authToken}`})
     }
}
const userLoginHndler=(req,res)=>{
    const {password,email}=req.body;
    const token=jwt.sign({id:email},SECRET_TOKEN); // here token use for generate unique credentials and authUser for check uder detail 
    const authUser=userdata.data.some(user=>user.password===password&&user.email==email)
   
    if(authUser)
    res.json({email,password,token,message:"success "})
    else
    res.status(401).json({message:"user not valid"})
}
module.exports={userLoginHndler,userSignHandler};