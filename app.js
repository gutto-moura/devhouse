const express = require('express');

let app = express();

app.use(express.static("public"));

app.listen(3000,()=>console.log("SERVIDOR OK"));
app.get('/',(req,res)=>res.send("BEM VINDO!"));
app.get('/manutencao',(req,res)=>{
    res.sendFile(__dirname+"/views/manutencao.html")
});
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/views/home.html")
});
app.get('/home',(req,res)=>{
    res.sendFile(__dirname + "/views/home.html")
});
app.get('/blog',(req,res)=>{
    res.sendFile(__dirname+"/views/blog.html")
});
app.get('/contato',(req,res)=>{
    res.sendFile(__dirname+"/views/contato.html")
});