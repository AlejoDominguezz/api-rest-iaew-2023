import { Router } from "express";
import { DeletePaquetes, GetPaquetes, PostPaquetes, PutPaquetes } from "../controllers/paquetes.controller.js";

const routerPaquetes = Router();

//Obtener todos los paquetes turisticos 
routerPaquetes.get("/", GetPaquetes );
//Crear un paquete turistico
routerPaquetes.post("/", PostPaquetes );
//Actualizar un paquete turistico
routerPaquetes.put("/", PutPaquetes );
//Eliminar un paquete turistico
routerPaquetes.delete("/", DeletePaquetes );



export default routerPaquetes;