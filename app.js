// const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

const algoliasearch = require('algoliasearch');
const client = algoliasearch("R9O8ZZFFQJ", "9dbd3a6cdfb330dcce15586d11bc9522");

const index = client.initIndex("Airports");
const airportsJSON = require('./airports.json');
 
const airports = [
  {
    name: "Foo",
    city: "Atlanta",
    country: "USA",
    iata_code: "ATL",
    _geoloc: {
        lat: "33.637648",
        lng: "-84.876575"
    },
    links_count: "1826",
    objectID: 3682
  }
];
 
index
  .saveObjects(airportsJSON, {
    autoGenerateObjectIDIfNotExist: true
  })
  .then(({ objectIDs }) => {
    console.log(objectIDs);
  })
  .catch(err => {
    console.log(err);
  });


// Searchable Attributes

index.setSettings({
    searchableAttributes: [
      'name',
      'city',
      'country',
      'iata_code',
      '_geoloc',
      'lat',
      'lng',
      'links_count',
      'objectID'
    ]
  }).then(() => {
    console.log('sent searchable attributes!');
  });

// Custom Ranking

index.setSettings({
    customRanking: [
      'asc(links_count)',
      'asc(objectID)',
      'asc(lng)',
      'typo',
      'geo',
      'words',
      'filters',
      'proximity',
      'attribute',
      'exact',
      'custom'
    ]
  }).then(() => {
    console.log('sent custom ranking!');
  });

// Search for an airport

index
    .search('Hartsfield Jackson Atlanta Intl')
    .then(({ hits }) => {
        console.log(hits);
  }).catch(err => {
      console.log(err)
  });
  
// Search for an airport with typo

index
    .search('heartsfield')
    .then(({ hits }) => {
        console.log(hits);
    }).catch(err => {
        console.log(err)
    });

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.use(express.static('public'));

app.listen(3002);




// Using HTTP instead of Express to start the server

// const server = express.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);
//     res.setHeader('Content-Type', 'text/html');
// });

// server.listen(3002);


