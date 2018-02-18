const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
var countrieData = require('../Models/geographyModel');
var salesFactData= require('../Models/SalesFactModel');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works with all data');
});

// Get all posts
router.get('/country', (req, res) => {

  res.send(JSON.stringify(countrieData.alldata));
});


router.get('/salesFact',(req,res)=>{

  res.send(JSON.stringify(salesFactData.alldata));
});
module.exports = router;
