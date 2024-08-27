const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');

app.get('/', (req, res)=> {
    res.send('Dragon is coming');
});

app.get('/categories', (req, res) => {
    res.send(categories);
})




app.listen(port, ()=>{
    console.log(`explore app listing on port: ${port}`)
});