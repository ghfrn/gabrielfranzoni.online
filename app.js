// THIS is the server's heart.

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'html/index.html'));
});

app.get('/demos/fancy', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'html/fancy.html'));
});

app.get('/demos/epic', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'html/epic.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.sendFile(path.resolve(__dirname, 'html/error.html'));
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

app.listen(port);