const Data = require("../Data")


const category = (req , res)=>{
    const filterData = Data.filter(item => item.cat.toLowerCase() == req.params.category);
    res.send(filterData);
}
const idvalues =(req,res)=>{
    const filteredId = Data.filter(item => item.id == req.params.id)
    res.send(filteredId)
}

const completeData = (req,res)=>{
   
    res.send(Data);
}

module.exports = {category , completeData , idvalues}