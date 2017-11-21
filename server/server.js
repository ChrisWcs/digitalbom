const express = require('express');
const test = require('./test');
const bom = require('./bom');
const app = express();

app.listen(3000, () => console.log('Server running onport 3000'));

app.get('/', (req, res) => res.send("asdfasdf"));

app.get( '/verse', (req, res) => {
    const { book, chapter, verse} = req.headers;
    console.log(book);
    res.send(bom[book][chapter][verse]);
});