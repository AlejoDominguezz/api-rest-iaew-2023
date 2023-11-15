import { Router } from "express";
import { DeletePaquetes, GetPaqueteById, GetPaquetes, PostPaquetes, PutPaquetes } from "../controllers/paquetes.controller.js";
import { crearPaqueteValidator, modificarPaqueteValidator, obtenerPaqueteByIdValidator } from "../middlewares/validationManager_Paquetes.js";

const routerPaquetes = Router();

//Obtener todos los paquetes turisticos 
routerPaquetes.get("/", GetPaquetes );

//Obtener todos los paquetes turisticos 
routerPaquetes.get("/:id", obtenerPaqueteByIdValidator, GetPaqueteById );

//Crear un paquete turistico
routerPaquetes.post("/", crearPaqueteValidator, PostPaquetes );

//Actualizar un paquete turistico
routerPaquetes.put("/:id", modificarPaqueteValidator, PutPaquetes );

//Eliminar un paquete turistico
routerPaquetes.delete("/:id", obtenerPaqueteByIdValidator, DeletePaquetes );



export default routerPaquetes;