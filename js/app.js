
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World from node.js!');
});

app.get('/delay', function (req, res) {
  setTimeout(function() {
    res.send('Hello World from node.js with delay!');
  }, 10000);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

