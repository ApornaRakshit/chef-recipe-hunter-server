const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000

const chefs = require('./data/chefs.json')

app.use(cors())

app.get('/',(req,res)=>{
    res.send('chef cooking is running')
});

app.get('/chefs',(req,res)=>{
    res.send(chefs)
})

app.listen(port,() =>{
    console.log(`chef cooking API is running on port:${port}`)
})



