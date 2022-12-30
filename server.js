const express=require('express');
var app=express();
app.get("/",function(req,resp)=>{
        resp.sendFile("public/first.html",{root:__dirname})
        });
app.listen(5000);
