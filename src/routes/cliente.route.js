import { Router } from "express";
import { GetPaquetesPorCliente } from "../controllers/clientes.controller.js";
import { obtenerPaquetesPorIdValidator } from "../middlewares/validationManager_Clientes.js";

const routerClientes = Router();

//Obtener todos los paquetes turisticos reservados por un cliente
routerClientes.get("/:id_cliente/paquetes", obtenerPaquetesPorIdValidator, GetPaquetesPorCliente );

export default routerClientes;


/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Operaciones relacionadas con clientes
 */


/**
 * @swagger
 * /api/v1/clientes/{id_cliente}/paquetes:
 *   get:
 *     summary: Obtener todos los paquetes turísticos reservados por un cliente
 *     tags: [Clientes]
 *     description: Obtiene una lista de todos los paquetes turísticos reservados por un cliente.
 *     parameters:
 *       - in: path
 *         name: id_cliente
 *         required: true
 *         description: ID del cliente.
 *         schema:
 *           type: number
 *           minimum: 0
 *           example: 12345678
 *     responses:
 *       '200':
 *         description: Lista de paquetes turísticos reservados obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PaqueteTuristico'
 *       '204':
 *         description: El cliente no tiene paquetes turísticos reservados.
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