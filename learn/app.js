const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('hello world ')
});

app.get('/example',(req,res)=>{
    res.send('hitting example file')
})



















app.listen('3000', () => {
    console.log('port listen  success fullly')
})