// declare axios for making http requests
const axios = require('axios');
const { articleMapper } = require('../mapping/article');


const API = process.env.API_URL;

const getArticlesById = async(req, res) =>{ 

    const id = req.params.id
     {}
    
    let article = await axios.get(`${API}/items/${id}`)
        .then( response => response.data )

    let description = await axios.get(`${API}/items/${id}/description`)
        .then( response => response.data )
    const articleToSend = articleMapper(article, description)  
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).json(articleToSend);
}

module.exports ={ getArticlesById }