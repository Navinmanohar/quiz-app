const{v4:uuid}=require("uuid")
const userData={
    "data":[
    {
    id:uuid(),
    username:"navin",
    password:"123",
    email:"navin@gmail.com"
},
{
 id:uuid(),
 username:"ram",
 password:"r123",
 email:"ram@gmail.com"
},]
}
module.exports=userData;