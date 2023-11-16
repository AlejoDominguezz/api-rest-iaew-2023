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
 * @swagger
 * tags:
 *   name: Reservas de paquetes
 *   description: Operaciones relacionadas con reservas de paquetes
 */



/**
 * @swagger
 * /api/v1/reservas-paquetes:
 *   get:
 *     summary: Obtener todas las reservas turísticas
 *     tags: [Reservas de paquetes]
 *     description: Obtiene una lista de todas las reservas turísticas.
 *     responses:
 *       '200':
 *         description: Lista de reservas turísticas obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ReservaPaquete'
 *       '204':
 *         description: No hay reservas turísticas disponibles.
 *       '500':
 *         description: Error de servidor interno.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error de servidor.
 *     security:
 *       - bearerAuth: []
 */


/**
 * @swagger
 * /api/v1/reservas-paquetes:
 *   post:
 *     summary: Crear una reserva turística
 *     tags: [Reservas de paquetes]
 *     description: Crea una nueva reserva turística.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_cliente:
 *                 type: number
 *                 description: ID del cliente que realiza la reserva (debe ser numérico y tener una longitud de 8 caracteres).
 *               fecha_reserva:
 *                 type: string
 *                 format: date-time
 *                 description: Fecha de la reserva (debe ser una fecha válida y posterior a la fecha actual).
 *               precio_total:
 *                 type: number
 *                 description: Precio total de la reserva (debe ser un valor numérico positivo).
 *               id_paquete:
 *                 type: string
 *                 format: mongoId
 *                 description: ID del paquete turístico asociado a la reserva (debe ser un ID de Mongo válido y existente).
 *     responses:
 *       '201':
 *         description: Reserva turística creada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Paquete creado exitosamente.
 *                 reserva:
 *                   $ref: '#/components/schemas/ReservaPaquete'
 *       '400':
 *         description: Error en la solicitud debido a datos incorrectos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Hubo un error al validar los campos.
 *                 errors:
 *                   type: array
 *                   description: Listado de errores de validación de datos de entrada.
 *                   items:
 *                     type: object
 *                     properties:
 *                       type:
 *                         type: string
 *                         description: Tipo de error.
 *                       value:
 *                         type: string
 *                         description: Valor que causó el error.
 *                       msg:
 *                         type: string
 *                         description: Mensaje de error específico.
 *                       path:
 *                         type: string
 *                         description: Ruta del campo que causó el error.
 *                       location:
 *                         type: string
 *                         description: Ubicación del error (por ejemplo, "body").
 *       '500':
 *         description: Error de servidor interno.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error de servidor.
 *     security:
 *       - bearerAuth: []
 */
