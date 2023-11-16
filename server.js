import express from 'express';
import dbConnection from './src/database/config.js';
import routerPaquetes from './src/routes/paquete.route.js';
import { auth } from 'express-oauth2-jwt-bearer';
import routerReservas from './src/routes/reserva.route.js';
import { swaggerDocs } from './src/swagger.js';

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = { 
            paquete:       '/api/v1/paquetes-turisticos',
            reserva:       '/api/v1/reservas-paquetes',
        }
        
        this.configurarAutenticacion();
        this.conectarDB();
        this.middlewares();
        this.routes();
    }
    
    configurarAutenticacion() {
        const jwtCheck = auth({
          audience: 'http://localhost:3000', // Ajusta esto según tu configuración
          issuerBaseURL: 'https://dev-ih2kh0g0o06mjqyy.us.auth0.com/', // Ajusta esto según tu configuración
          tokenSigningAlg: 'RS256', // Ajusta esto según tu configuración
        });
    
        // Aplica el middleware de autenticación a todas las rutas
        this.app.use(jwtCheck);
      }
    

    middlewares(){
        //parseo y lectura del body
        this.app.use(express.json());
    }

    routes(){ 
        this.app.use(this.paths.paquete , routerPaquetes);
        this.app.use(this.paths.reserva , routerReservas);
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