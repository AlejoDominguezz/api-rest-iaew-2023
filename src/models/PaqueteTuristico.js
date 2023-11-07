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
