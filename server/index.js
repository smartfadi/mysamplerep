import express from 'express';
import path from 'path';

let app = express();

app.get("/*",(req, res)=>{
    res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(2323, ()=>{console.log("Port running on:2323")})