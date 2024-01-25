const express = require("express");
const app = express();

const data = require("./data.json");
app.get("/",(req,res)=>{
    res.send("hi this is demo made mr.aman");
})
app.get("/service",(req,res)=>{
    res.send(data);
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})