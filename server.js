const express= require('express');

const app=express();

app.get('/user',(req,res)=>
{
    res.send("hello word");
})





app.listen(3000,()=>console.log("server is running"));