const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const data = require("./data.json");
app.get("/",(req,res)=>{
    res.send("hi this is demo made mr.aman");
})
app.get("/service",(req,res)=>{
    res.send(data);
})

app.listen(8000,()=>{
    console.log('Server is running on port 3000');
})