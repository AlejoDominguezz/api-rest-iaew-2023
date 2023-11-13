import { Router } from "express";
import { postReservas, getReservas } from "../controllers/reserva.controller.js"; 

const routerReservas = Router();

//Obtener todas las reservas turísticas
routerReservas.get("/", getReservas );

//Crear una reserva turística
routerReservas.post("/", postReservas );



export default routerReservas;