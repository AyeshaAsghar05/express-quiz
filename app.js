const express = require('express');
const app = express();

// get method route
app.get('/',(req,res)=>{
    res.send('express is a frameWork, offers tools to build applications single or multi page, asynchoronous and helps to manage servers and routes ')
})
app.listen(3000, function(){
    console.log('Simple app is Running');
})
