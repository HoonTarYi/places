const axios = require('axios');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const server = express();
const path = require('path');
// const filemgr = require('./filemgr');
const Place = require('./Place')


const port = process.env.PORT || 5000;

server.use(bodyParser.urlencoded({extended:true}));

server.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

const PLACES_API_KEY = 'AIzaSyB0L68gvLdQgJGMtJ6ALYoqV-brFoRUqS4'
var filteredResults;

hbs.registerHelper('list',(items,options) => {
  items = filteredResults;
  var out = "<tr><th>Name</th><th>Address</th><th>Photo</th></tr>";

  const length = items.length;

  for(var i=0; i<length; i++) {
    out = out + options.fn(items[i]);
  }
  return out;
});

server.use(express.static(path.join(__dirname,'public')));

server.get('/',(req,res) => {
  res.render('home.hbs');
});

server.get('/form',(req,res) => {
  res.render('form.hbs');
});

server.post('/historical',(req,res) => {
  Place.find({})
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((error) => {
    res.status(400).send(error);
  })
});


server.post('/getplaces',(req,res) => {
  const addr = req.body.address;
  const placetype = req.body.placetype;
  const name = req.body.name;

  const locationReq = `https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=AIzaSyCXxsiK79-DXha-afMjHuLwohgNaSmRpXY`;

axios.get(locationReq).then((response) => {
  const locationData = {
    addr: response.data.results[0].formatted_address,
    lat: response.data.results[0].geometry.location.lat,
    lng: response.data.results[0].geometry.location.lng,
  }

  server.post('/delete', (req,res) => {
    Place.remove({})
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(400).send(error);
      })
  });


const placesReq = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${locationData.lat},${locationData.lng}&radius=1500%20&types=${placetype}%20&name=${name}&key=${PLACES_API_KEY}`;

 return axios.get(placesReq);
}).then((response) => {

  filteredResults = extractData(response.data.results);

   Place.insertMany(filteredResults)
   .then((result) => {
      res.status(200).send(result);
   })
   .catch((error) => {
     res.status(400).send(error);
   })


}).catch((error) => {
  console.log(error);
});

});

const extractData = (originalResults) => {
  var placesObj = {
    table: [],
  };

  const length = originalResults.length;

  for (var i=0; i<length; i++) {
    if(originalResults[i].photos){
      const photoRef = originalResults[i].photos[0].photo_reference;
      const requestUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${PLACES_API_KEY}`

      tempObj = {
        name:originalResults[i].name,
        address: originalResults[i].vicinity,
        photo_reference: requestUrl,
      }
    }  else {
      tempObj = {
        name:originalResults[i].name,
        address: originalResults[i].vicinity,
        photo_reference: '/noimage.png',
      }
    }
    placesObj.table.push(tempObj);
  }

  return placesObj.table;
};

server.listen(port,()=> {
  console.log(`Server started on port ${port}`);
});
