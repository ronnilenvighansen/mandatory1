var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = __dirname + '/wwwroot/html';

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('wwwroot'));
app.get('/', function (req, res) {
    res.sendFile( path + '/index.html', function (err)
    {

    });
});

app.get('/Contact', function (req, res) {
    res.send('Contact');
});

app.get('/About', function (req, res) {
    res.send('About');
});

app.get('/Subscribe', function (req, res) {
    res.send('You have subscribed to the newsletter!');
});

app.listen(7000);