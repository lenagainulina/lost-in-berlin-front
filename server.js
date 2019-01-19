const fetch = require('isomorphic-fetch');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/api/businesses', (req, res) => {
        fetch('http://localhost:8080/businesses?location=berlin', {method: 'get'})
            .then(response => {
                response
                    .json()
                    .then(actualData => res.send(actualData))
                    .catch(jsonParsingError => res.send(jsonParsingError))
            }).catch(error => res.send(error))
    }
);

app.listen(9000);
