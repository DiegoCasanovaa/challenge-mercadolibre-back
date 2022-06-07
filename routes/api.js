const express = require('express');
const { getArticlesByFilter } = require('../controller/search.controller');

const router = express.Router();


router.get('/', (req, res) =>{

    res.send('api works');

});

router.get('/search', getArticlesByFilter)

module.exports = router;