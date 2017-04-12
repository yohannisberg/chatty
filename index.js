var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('assets'))
app.use(bodyParser.json())

var messages = [];
var username = [];

app.get('/messages', function(req, res, next) {
  res.status(200).json({ messages: messages})
});

app.post('/messages', function(req, res, next) {
  messages.push({message: req.body.message, time: new Date() });
  res.status(200).json({ messages: messages });
});

app.get('/username', function(req, res, next) {
  res.status(200).json({ username: username })
});

app.post('/username', function(req, res, next) {
  messages.push({username: req.body.username });
  res.status(200).json({ username: username });
});

app.listen(3000)
