const express = require('express');
const chefs = require('./data/chefs.json');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Chef is cooking')
});

app.get('/chefs',(req,res)=>{
    res.send(chefs)
})

app.listen(port,()=>{
    console.log(`Chef cooking is running onnnn port: ${port}`)
})

