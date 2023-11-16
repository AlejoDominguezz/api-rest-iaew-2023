import { Schema, model } from "mongoose";

const ReservaPaqueteSchema = new Schema({

    id_cliente:{
        type: Number,
        required: true,
    },

    fecha_reserva:{
        type:  Date,
        required: true,
    },

    precio_total:{
        type: Number,
        required: true,
    },

    id_paquete:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'PaqueteTuristico'
    }

});

export const Reserva = model('ReservaPaquete', ReservaPaqueteSchema);


/**
 * @swagger
 * components:
 *   schemas:
 *     ReservaPaquete:
 *       type: object
 *       properties:
 *         id_cliente:
 *           type: number
 *           description: ID del cliente que realiza la reserva.
 *         fecha_reserva:
 *           type: string
 *           format: date-time
 *           description: Fecha de la reserva.
 *         precio_total:
 *           type: number
 *           description: Precio total de la reserva.
 *         id_paquete:
 *           type: string
 *           format: mongoId
 *           description: ID del paquete turístico asociado a la reserva.
 *       required:
 *         - id_cliente
 *         - fecha_reserva
 *         - precio_total
 *         - id_paquete
 */

