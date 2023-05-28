const express=require("express")
const app=express();
 const port=process.env.PORT||3000;
const {login,signup,quizdata,routor}=require("./userControl/user.router")
const pageNotefound=require("./midleware/pageNotefound");


app.use(express.json()); //function for  use json data

app.use('/',routor) //this is for home page
    
app.use('/quiz',quizdata);  //this for question comes from router

app.use('/auth/login',login) // this for login detail
app.use('/auth/signup',signup) // this for login detail
app.use(pageNotefound);


app.listen(port,()=>{
    console.log(`listening on ${port}...`)
    

})