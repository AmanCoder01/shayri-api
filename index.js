const express = require("express");
const cors = require("cors");
const app = express();
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));

const data = require("./data.json");
app.get("/", (req, res) => {
    res.send("hi this is demo made mr.aman");
})
app.get("/service", (req, res) => {
    res.send(data);
})

app.listen(8000, () => {
    console.log('Server is running on port 8000');
})