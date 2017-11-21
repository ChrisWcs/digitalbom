const express = require('express');
const test = require('./test');
const bom = require('./bom');
const app = express();

app.listen(3000, () => console.log('Server running onport 3000'));

app.get('/', (req, res) => res.send("asdfasdf"));

app.get( '/nephi1', (req, res) => res.send(`${bom['1 Nephi']['1']['1']}`));