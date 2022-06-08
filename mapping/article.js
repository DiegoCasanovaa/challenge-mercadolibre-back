const { Articles } = require("../models/article")

const allArticleMapper = (allArticle, filters)=>{ 
    const categories = filters.map( (filter,idx) => {

        const categoriesToAdd = filter.path_from_root.map( path => path.name )

        return categoriesToAdd
    })

    const items = allArticle.map( article =>{
        const decimal = article.price.toString().split('.')[1]
        return {
            id: article.id,
            title: article.title,
            price: {
            currency: article.currency_id,
            amount: Number(article.price),
            decimals: Number(decimal)
            },
            picture: article.thumbnail,
            condition: article.condition,
            free_shipping: article.shipping.free_shipping
        }
    })

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

const articleMapper = (article, description)=>{ 
    const decimal = article.price.toString().split('.')[1]
    const items = {
        id: article.id,
        title: article.title,
        price: {
        currency: article.currency_id,
        amount: Number(article.price),
        decimals: Number(decimal)
        },
        picture: article.pictures.url,
        condition: article.condition,
        free_shipping: article.shipping.free_shipping,
        sold_quantity: Number(article.sold_quantity),
        description: description.plain_text
    }

    const articleToSend ={
        author:{
            name:'Diego',
            lastName:'Casanova'
        },
        items: items
    }

    return articleToSend
}

module.exports ={ allArticleMapper, articleMapper }