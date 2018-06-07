const axios = require('axios');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const server = express();

const port = process.env.PORT || 3000;

server.use(bodyParser.urlencoded({extended:true}));

server.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

server.get('/',(req,res) => {
  res.render('home.hbs');
});

server.get('/form',(req,res) => {
  res.render('form.hbs');
});

server.listen(port,()=> {
  console.log(`Server started on port ${port}`);
});
