const express = require('express');
const { getArticlesById } = require('../controller/article.controller');
const { getArticlesByFilter } = require('../controller/search.controller');

const router = express.Router();


router.get('/', (req, res) =>{

    res.send('api works');

});

router.get('/search', getArticlesByFilter)
router.get('/items/:id', getArticlesById)

module.exports = router;