const express = require("express");
const route  = require("./router/MainRoute");
const cors = require("cors")
const app = express();
const port = 4000;

app.use(cors({
    origin:"*"
}
))
app.use("/blog",route);
app.listen(port, ()=>{
    try{
        console.log(`Server is live on port ${port}`)
    }
    catch(err){
        console.log(err);
    }
})