const fetch = require('isomorphic-fetch')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json())

app.get('/api/businesses', function(req, res){
      req.query
              fetch('http://localhost:8080/businesses?location=berlin', {
                  method: 'get'
              }).then(function(response) {
            
                  response.json().then(actualData => {
                      res.send(actualData);
                  }).catch(jsonParsingError => {
                      res.send(jsonParsingError);    
                  })
              }).catch(function(error) {
                  res.send(error);
              })
})

app.listen(9000)