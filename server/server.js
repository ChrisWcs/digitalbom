const express = require('express');
const bom = require('./bom');
const cors = require('cors');
const app = express();

app.use(cors());

app.listen(3000, () => console.log('Server running onport 3000'));

app.get( '/book/:book/chapter/:chapter/verse/:verse', (req, res) => {
    const { book, chapter, verse} = req.params;
    res.status(200).json({
        verse: bom[book][chapter][verse]
    });
});

app.get( '/book/:book/chapter/:chapter', (req, res) => {
    console.log(req.params);
    const { book, chapter } = req.params;
    console.log(book);
    console.log(chapter);
    res.status(200).json({
        chapter: bom[book][chapter]
    });
});