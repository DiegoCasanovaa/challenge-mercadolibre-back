const express = require('express');
const cors = require('cors');
const path = require('path');

const api = require('../routes/api')


class Server{ 

    constructor(){ 

        this.app = express();        
        this.port = process.env.PORT;

        // Rutas
        this.routes();
        
        // Middlewares
        this.middlewares();
    }

    routes(){ 

        this.app.use( '/api' , api)

    }

    listen(){

        this.app.listen(this.port, () => { 
        console.log('Servidor corriendo en puerto:', this.port)
        });

    }

    middlewares(){
        
        // CORS
        this.app.use( cors() )

        
        // lectura y parseo del body
        this.app.use( express.json());
        

        // Directorio publico
        this.app.use(express.static('public'));

    }

}

module.exports = Server;