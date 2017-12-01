const express = require('express');
const bom = require('./bom');
const cors = require('cors');
const app = express();

app.use(cors());

app.listen(3000, () => console.log('Server running onport 3000'));

app.get( '/verse', (req, res) => {
    const { book, chapter, verse} = req.headers;
    res.status(200).json({
        verse: bom[book][chapter][verse]
    });
});

app.get( '/chapter', (req, res) => {
    const { book, chapter } = req.headers;
    res.status(200).json({
        chapter: bom[book][chapter]
    });
});