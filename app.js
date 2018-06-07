const axios = require('axios');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const server = express();

const port = process.env.PORT || 3000;

server.use(bodyParser.urlencoded({extended:true}));

server.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

const PLACES_API_KEY = 'AIzaSyB0L68gvLdQgJGMtJ6ALYoqV-brFoRUqS4'


server.get('/',(req,res) => {
  res.render('home.hbs');
});

server.get('/form',(req,res) => {
  res.render('form.hbs');
});

server.post('/getplaces',(req,res) => {
  const addr = req.body.address;
  const locationReq = `https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=AIzaSyCXxsiK79-DXha-afMjHuLwohgNaSmRpXY`;

axios.get(locationReq).then((response) => {
  const locationData = {
    addr: response.data.results[0].formatted_address,
    lat: response.data.results[0].geometry.location.lat,
    lng: response.data.results[0].geometry.location.lng,
  }

const placesReq = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${locationData.lat},${locationData.lng}&radius=1500%20&types=food%20&name=food&key=AIzaSyB0L68gvLdQgJGMtJ6ALYoqV-brFoRUqS4${PLACES_API_KEY}`;

  console.log(addr);
  res.status(200).send(locationData);
}).catch((error) => {
  console.log(error);
});


});

server.listen(port,()=> {
  console.log(`Server started on port ${port}`);
});
