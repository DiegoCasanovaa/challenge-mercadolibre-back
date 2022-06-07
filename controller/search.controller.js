
// declare axios for making http requests
const axios = require('axios');
const { allArticleMapper } = require('../mapping/article');


const API = process.env.API_URL;

const getArticlesByFilter = (req, res) =>{ 

    const query = req.query.q
    const limit = req.query.limit
    axios.get(`${API}/search?q=${query}&limit=${limit}`)
        .then( response => { 
        const articlesToSend = allArticleMapper(response.data.results, response.data.filters[0].values)
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json(articlesToSend);

    })

}

module.exports ={ getArticlesByFilter }