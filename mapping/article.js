const { Articles } = require("../models/article")

const allArticleMapper = (allArticle, filters)=>{ 
    const categories = filters.map( (filter,idx) => {

        const categoriesToAdd = filter.path_from_root.map( path => path.name )

        return categoriesToAdd
    })

    const items = allArticle.map( article =>({
        id: article.id,
        title: article.title,
        price: {
        currency: article.prices.currency_id,
        amount: article.prices.amount,
        decimals: article.prices.type
        },
        picture: article.thumbnail,
        condition: article.condition,
        free_shipping: article.shipping.free_shipping
    }))

    const articlesToSend ={
        author:{
            name:'Diego',
            lastName:'Casanova'
        },
        items: items,
        categories: categories
    }

    return articlesToSend
}

module.exports ={ allArticleMapper }