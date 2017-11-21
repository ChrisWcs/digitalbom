const express = require('express');
const test = require('./test');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get('/1', (req, res) => res.send(`${test.text1}`));
app.get('/2', (req, res) => res.send(`${test.text2}`));