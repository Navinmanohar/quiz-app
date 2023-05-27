const express=require('express')
const routor=express.Router();
const quisesData=require('../db/Quizes')
const {userLoginHndler,userSignHandler}=require("./userControl")
const login=express.Router();
const signup=express.Router();
// const home=express.Router();

// home.route('/').get((req,res)=>{
//     res.send("hello world!")
// })
routor.route('/')
.get((req,res)=>{
    res.json(quisesData.data);
})


// it is for log in crediantial
login.route('/').post(userLoginHndler)
signup.route('/').post(userSignHandler)

    
module.exports={login,signup,routor };