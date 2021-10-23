const express = require ("express");
const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req,res)=>{

    res.send("I am  backend server")
})

app.listen(PORT,(err)=>{
if(err){
    console.log(`Error in running server ${err.message}`);
}
console.log(`Server running on port ${PORT}`)
})