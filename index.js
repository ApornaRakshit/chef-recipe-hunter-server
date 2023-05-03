const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000

const chefs = require('./data/chefs.json')
const chef = require('./data/chef.json')

app.use(cors())

app.get('/',(req,res)=>{
    res.send('chef cooking is running')
});

app.get('/chefs',(req,res)=>{
    res.send(chefs)
})

app.get('/chef',(req,res)=>{
    res.send(chef)
})

app.get('/chef/:id',(req, res) =>{
    const id = req.params.id;
    const selectedChef = chef.find(n=> n._id === id);
    res.send(selectedChef)
})

app.get('/chefs/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    if(id === 0){
        res.send(chef)
    }
    else{
        const chefFood = chef.filter(n=> parseInt(n.chef_id) === id);
        res.send(chefFood);
    }
    
})

app.listen(port,() =>{
    console.log(`chef cooking API is running on port:${port}`)
})



