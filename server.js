import express from 'express';
import dbConnection from './src/database/config.js';
import routerPaquetes from './src/routes/paquete.route.js';
import { auth } from 'express-oauth2-jwt-bearer';
import routerReservas from './src/routes/reserva.route.js';
import { swaggerDocs } from './src/swagger.js';
import routerClientes from './src/routes/cliente.route.js';

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = { 
            paquete:       '/api/v1/paquetes-turisticos',
            reserva:       '/api/v1/reservas-paquetes',
            cliente:       '/api/v1/clientes'
        }
        
        this.configurarAutenticacion();
        this.conectarDB();
        this.middlewares();
        this.routes();
    }
    
    configurarAutenticacion() {
        const jwtCheck = auth({
          audience: 'http://localhost:3000', 
          issuerBaseURL: 'https://dev-ih2kh0g0o06mjqyy.us.auth0.com/', 
          tokenSigningAlg: 'RS256', 
        });
    
        // Aplica el middleware de autenticación a todas las rutas excepto a la documentación con Swagger
        this.app.use((req, res, next) => {
            if (req.originalUrl.startsWith(`/api/docs/`)) {
                return next();
            }
            jwtCheck(req, res, next);
        });
      }
    

    middlewares(){
        //parseo y lectura del body
        this.app.use(express.json());
    }

    routes(){ 
        this.app.use(this.paths.paquete , routerPaquetes);
        this.app.use(this.paths.reserva , routerReservas);
        this.app.use(this.paths.cliente , routerClientes)
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