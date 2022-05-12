const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});


// path to connect the api folder alll the way to the public folder in client
// router.get('/client', (req,res)=>{
//   res.sendFile(path.join(__dirname, '..', '..', 'client', 'public','index.html'))})


// path to connect the api folder alll the way to the views folder in server
// router.get('/server', (req,res)=>{
//   res.sendFile(path.join(__dirname,  '..', 'views','index.html'))})

 module.exports = router;