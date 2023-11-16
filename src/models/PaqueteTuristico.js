import { Schema, model } from "mongoose";

const PaqueteTuristicoSchema = new Schema({

    titulo:{
        type:  String,
        required: [true, "Se debe indicar un titulo para el paquete turistico"],
    },

    descripcion:{
        type:  String,
        required: [true, "Se debe indicar una descripción para el paquete turistico"],
    },

    precio:{
        type: Number,
        required: true,
    }

});

export const Paquete = model('PaqueteTuristico', PaqueteTuristicoSchema);

// DOCUMENTACIÓN SWAGGER ------------------------------------------------------------

/**
 * @swagger
 * components:
 *   schemas:
 *     PaqueteTuristico:
 *       type: object
 *       properties:
 *         titulo:
 *           type: string
 *           description: El título del paquete turístico.
 *         descripcion:
 *           type: string
 *           description: La descripción del paquete turístico.
 *         precio:
 *           type: number
 *           description: El precio del paquete turístico.
 *       required:
 *         - titulo
 *         - descripcion
 *         - precio
 */