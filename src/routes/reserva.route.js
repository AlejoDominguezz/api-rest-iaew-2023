/**
 * @swagger
 * tags:
 *   name: Reservas de paquetes
 *   description: Operaciones relacionadas con reservas de paquetes
 */

import { Router } from "express";
import { postReservas, getReservas } from "../controllers/reserva.controller.js"; 
import { crearReservaValidator } from "../middlewares/validationManager_Reservas.js";
const routerReservas = Router();

//Obtener todas las reservas turísticas
routerReservas.get("/", getReservas );

//Crear una reserva turística
routerReservas.post("/", crearReservaValidator, postReservas );



export default routerReservas;

