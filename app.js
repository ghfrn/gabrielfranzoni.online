// THIS is the server's heart.

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/demos/fancy', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'fancy.html'));
});

app.get('/demos/epic', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'epic.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port);