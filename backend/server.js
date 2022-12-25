import express from "express";
import data from "./data.js";
import cors from 'cors'

const PORT = 5000
const app = express()
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Root route testing')
})

app.get('/api/products',(req,res)=>{
    res.send(data)
})

app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`App server is running on port ${PORT}`)
    }
})