const express = require('express');
const router = express.Router();
const path = require('path');

// gets subdir files
router.get('^/$|/index(.html)?', function (req, res) {
 res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'index.html'))
  });
  
  router.get('/808', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', '808.html'))
     });
  


module.exports = router;