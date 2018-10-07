const math = require('mathjs');
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

app.get('/calc', function (req, res) {
  value = 0.1;
  for(var i = 5000000; i<6000000; i++) {
    value += math.sin(i);
  }
  res.send('node.js intensive calculation, result:' + value);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

