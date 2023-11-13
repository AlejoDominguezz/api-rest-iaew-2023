import express from 'express';
import dbConnection from './src/database/config.js';
import routerPaquetes from './src/routes/paquete.route.js';
import { auth } from 'express-oauth2-jwt-bearer';

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = { 
            paquete:       '/api/paquetes-turisticos'
        }
        
        this.configurarAutenticacion();
        this.conectarDB();
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
    
    routes(){ 
        this.app.use(this.paths.paquete , routerPaquetes);
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