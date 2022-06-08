
// declare axios for making http requests
const axios = require('axios');
const { allArticleMapper } = require('../mapping/article');


const API = process.env.API_URL;

const getArticlesByFilter = (req, res) =>{ 

    const query = req.query.q
    const limit = req.query.limit
    axios.get(`${API}/sites/MLA/search?q=${query}&limit=${limit}`)
        .then( response => { 
        const filters = response.data.filters.length !== 0 ? response.data.filters[0].values : null
        const articlesToSend = allArticleMapper(response.data.results, filters )
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json(articlesToSend);

    })

}

module.exports ={ getArticlesByFilter }