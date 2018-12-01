const fetch = require('isomorphic-fetch')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/api/businesses', function(req, res){
    res.send([
        {
            "description": "Hi, I'm Ada, the dog.",
            "serviceLocation": "Berlin",
            "photo": null,
            "lname": "Polkanova",
            "fname": "Ada"
        },
        {
            "description": "Hi, I'm Sergey, the guide.",
            "serviceLocation": "Berlin",
            "photo": null,
            "lname": "Lukichev",
            "fname": "Sergey"
        },
        {
            "description": "Hi, I'm Lena, the guide.",
            "serviceLocation": "Berlin",
            "photo": null,
            "lname": "Gainulina",
            "fname": "Lena"
        }
     ])
})

app.listen(9000)