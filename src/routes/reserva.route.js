/**
 * @swagger
 * tags:
 *   name: Reservas de paquetes
 *   description: Operaciones relacionadas con reservas de paquetes
 **/

import { Router } from "express";
import { postReservas, getReservas } from "../controllers/reserva.controller.js"; 
import { crearReservaValidator } from "../middlewares/validationManager_Reservas.js";
const routerReservas = Router();

//Obtener todas las reservas turísticas
routerReservas.get("/", getReservas );

//Crear una reserva turística
routerReservas.post("/", crearReservaValidator, postReservas );



export default routerReservas;

/**
@swagger
info:
  title: Reservas API
  description: API para manejar reservas
  version: 1.0.0
openapi: 3.0.0
paths:
  /reservas:
    get:
      summary: Obtener todas las reservas
      tags: [Reservas Paquetes]
      responses:
        '200':
          description: Lista de reservas consultada con éxito
          content:
            application/json:
                schema:
                    type: object
                    properties:
                        reservas:
                            type: array
                            items:
                                $ref: '#/components/schemas/Proyecto'
        '204':
          description: No se encontraron reservas
          content:
            application/json:
              schema:
                  type: object
                  properties:
                      error:
                      type: string
                      description: Mensaje de error.
    post:
      summary: Crear una nueva reserva
      tags: [Reservas Paquetes]
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                id_cliente:
                  type: number
                  description: ID del cliente que reserva un paquete
                fecha_reserva:
                  type: date
                  description: Fecha en la que se hizo la reserva
                precio_total:
                  type: number
                  description: Precio total de la reserva
                id_paquete:
                  type: string
                  description: Id del paquete reservado
      responses:
        '201':
          description: Reserva creada exitosamente
          content:
            application/json:
              example:
                ok: true
        '500':
          description: Server error
          content:
            application/json:
              example:
                error: Error de servidor
*/