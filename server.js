import express from 'express';
import dbConnection from './src/database/config.js';

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = { 
        }

        this.conectarDB();
        this.routes();
    }
    

    routes(){ 
    }

    async conectarDB(){
        await dbConnection();
    }

    listen(){
        this.app.listen( this.port , () => {
            console.log(`Servidor corriendo en puerto: ${this.port}` );
            console.log(`Servidor corriendo en: ${process.env.ORIGIN1}` );
            
        });
    }

}

export default Server;