import express from 'express';
import dbConnection from './src/database/config.js';
import routerPaquetes from './src/routes/paquete.route.js';
import routerReservas from './src/routes/reserva.route.js';
import { swaggerDocs } from './src/swagger.js';

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = { 
            paquete:       '/api/paquetes-turisticos',
            reserva:       '/api/reservas',
        }

        this.conectarDB();
        this.routes();
    }
    

    routes(){ 
        this.app.use(this.paths.paquete , routerPaquetes, routerReservas);
    }

    async conectarDB(){
        await dbConnection();
    }

    listen(){
        this.app.listen( this.port , () => {
            console.log(`Servidor corriendo en puerto: ${this.port}` );
            console.log(`Servidor corriendo en: ${process.env.ORIGIN1}` );
            swaggerDocs(this.app, process.env.PORT)
            
        });
    }

}

export default Server;