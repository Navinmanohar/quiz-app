const express=require('express')
const quizdata=express.Router();
const quisesData=require('../db/Quizes')
const {userLoginHndler,userSignHandler}=require("./userControl")
const login=express.Router();
const signup=express.Router();
const routor=express.Router();

routor.route('/').get((req,res)=>{
    res.send("hello world!")
})
quizdata.route('/')
.get((req,res)=>{
    res.json(quisesData.data);
})


// it is for log in crediantial
login.route('/').post(userLoginHndler)
signup.route('/').post(userSignHandler)

    
module.exports={login,signup,quizdata,routor};