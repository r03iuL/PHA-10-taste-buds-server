const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');
const chefdata = require('./data/chefData.json');

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Server is online')
})

app.get('/categories',(req,res)=>{
    res.send(categories)
})

app.get('/chefdata',(req,res)=>{
    res.send(chefdata);
})
app.get('/chefdata/:id',(req,res)=>{
    const id= req.params.id;
    console.log(id);
    const selectedchef = chefdata.find(n=>n._id ===id);
    res.send(selectedchef);
})

app.get('/categories/:id',(req,res)=>{
    const id =req.params.id;
    const categoriesChef = chefdata.filter(n=>n.categories_id === id)
    res.send(categoriesChef)
})

app.listen(port,()=>{
    console.log(`Server is runnning on port :${port}`)
})