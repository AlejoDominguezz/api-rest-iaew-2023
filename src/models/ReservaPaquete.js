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
