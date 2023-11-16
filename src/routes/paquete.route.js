import { Router } from "express";
import { DeletePaquetes, GetPaqueteById, GetPaquetes, PostPaquetes, PutPaquetes } from "../controllers/paquetes.controller.js";
import { crearPaqueteValidator, modificarPaqueteValidator, obtenerPaqueteByIdValidator } from "../middlewares/validationManager_Paquetes.js";

const routerPaquetes = Router();

//Obtener todos los paquetes turisticos 
routerPaquetes.get("/", GetPaquetes );

//Obtener un paquete turistico por ID
routerPaquetes.get("/:id", obtenerPaqueteByIdValidator, GetPaqueteById );

//Crear un paquete turistico
routerPaquetes.post("/", crearPaqueteValidator, PostPaquetes );

//Actualizar un paquete turistico
routerPaquetes.put("/:id", modificarPaqueteValidator, PutPaquetes );

//Eliminar un paquete turistico
routerPaquetes.delete("/:id", obtenerPaqueteByIdValidator, DeletePaquetes );



export default routerPaquetes;


/**
 * @swagger
 * tags:
 *   name: Paquetes Turísticos
 *   description: Operaciones relacionadas con alta, baja, modificación y consulta de Paquetes Turísticos
 */


/**
 * @swagger
 * /api/v1/paquetes-turisticos:
 *   get:
 *     summary: Obtener todos los paquetes turísticos
 *     tags: [Paquetes Turísticos]
 *     description: Obtiene una lista de todos los paquetes turísticos disponibles.
 *     responses:
 *       '200':
 *         description: Lista de paquetes turísticos obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 paquetes:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       titulo:
 *                         type: string
 *                         description: Título del paquete turístico.
 *                       descripcion:
 *                         type: string
 *                         description: Descripción del paquete turístico.
 *                       precio:
 *                         type: number
 *                         description: Precio del paquete turístico.
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
 * /api/v1/paquetes-turisticos/{id}:
 *   get:
 *     summary: Obtener un paquete turístico por ID
 *     tags: [Paquetes Turísticos]
 *     description: Obtiene un paquete turístico específico mediante su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del paquete turístico a obtener.
 *         schema:
 *           type: string
 *           format: mongoId
 *     responses:
 *       '200':
 *         description: Paquete turístico obtenido con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 paquete:
 *                   type: object
 *                   properties:
 *                     titulo:
 *                       type: string
 *                       description: Título del paquete turístico.
 *                     descripcion:
 *                       type: string
 *                       description: Descripción del paquete turístico.
 *                     precio:
 *                       type: number
 *                       description: Precio del paquete turístico.
 *       '404':
 *         description: No se encontró un paquete turístico con el ID proporcionado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: No existe un paquete con ID {id}.
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
 *                         description: Ubicación del error (por ejemplo, "params").
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
 * /api/v1/paquetes-turisticos:
 *   post:
 *     summary: Crear un paquete turístico
 *     tags: [Paquetes Turísticos]
 *     description: Crea un nuevo paquete turístico.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título del paquete turístico (máximo 150 caracteres).
 *               descripcion:
 *                 type: string
 *                 description: Descripción del paquete turístico (máximo 1000 caracteres).
 *               precio:
 *                 type: number
 *                 description: Precio del paquete turístico (debe ser un valor numérico positivo).
 *     responses:
 *       '201':
 *         description: Paquete turístico creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Paquete creado exitosamente
 *                 paquete:
 *                   type: object
 *                   properties:
 *                     titulo:
 *                       type: string
 *                       description: Título del paquete turístico.
 *                     descripcion:
 *                       type: string
 *                       description: Descripción del paquete turístico.
 *                     precio:
 *                       type: number
 *                       description: Precio del paquete turístico.
 *       '409':
 *         description: Ya existe un paquete con el mismo título.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Ya existe un paquete con un título '{titulo}'. Por favor, ingrese un título diferente.
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



/**
 * @swagger
 * /api/v1/paquetes-turisticos/{id}:
 *   put:
 *     summary: Actualizar un paquete turístico por ID
 *     tags: [Paquetes Turísticos]
 *     description: Actualiza un paquete turístico existente mediante su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del paquete turístico a actualizar.
 *         schema:
 *           type: string
 *           format: mongoId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título del paquete turístico (máximo 150 caracteres).
 *               descripcion:
 *                 type: string
 *                 description: Descripción del paquete turístico (máximo 1000 caracteres).
 *               precio:
 *                 type: number
 *                 description: Precio del paquete turístico (debe ser un valor numérico positivo).
 *     responses:
 *       '200':
 *         description: Paquete turístico actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg: 
 *                   type: string
 *                   description: El paquete con ID {id} fue modificado exitosamente
 *                 paquete:
 *                   type: object
 *                   properties:
 *                     titulo:
 *                       type: string
 *                       description: Título actualizado del paquete turístico.
 *                     descripcion:
 *                       type: string
 *                       description: Descripción actualizada del paquete turístico.
 *                     precio:
 *                       type: number
 *                       description: Precio actualizado del paquete turístico.
 *       '404':
 *         description: No se encontró un paquete turístico con el ID proporcionado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: No existe un paquete con ID {id}.
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
 *       '409':
 *         description: Ya existe un paquete con el mismo título.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Ya existe un paquete con un título '{titulo}'. Por favor, ingrese un título diferente.
 *       '500':
 *         description: Error de servidor interno.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 *     security:
 *       - bearerAuth: []
 */


/**
 * @swagger
 * /api/v1/paquetes-turisticos/{id}:
 *   delete:
 *     summary: Eliminar un paquete turístico por ID
 *     tags: [Paquetes Turísticos]
 *     description: Elimina un paquete turístico existente mediante su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del paquete turístico a eliminar.
 *         schema:
 *           type: string
 *           format: mongoId
 *     responses:
 *       '200':
 *         description: Paquete turístico eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: El paquete con ID {id} fue eliminado exitosamente.
 *       '404':
 *         description: No se encontró un paquete turístico con el ID proporcionado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: No existe un paquete con ID {id}.
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
 *                         description: Ubicación del error (por ejemplo, "params").
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