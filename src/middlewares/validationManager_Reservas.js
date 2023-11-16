import { body } from "express-validator";
import { validarCampos } from "./validar-campos.js";


export const crearReservaValidator = [
    body('id_cliente')
        .isAlphanumeric()
        .withMessage('El id_cliente debe ser alfanumérico'),
    body('id_paquete')
        .isMongoId()
        .withMessage('El campo id_paquete debe ser id de mongo válido'),
    body('fecha_reserva')
        .isDate()
        .withMessage('El campo fecha_reserva debe ser una fecha'),
    body('precio_total')
        .isNumeric()
        .withMessage('El campo precio_total debe ser un valor numérico'),

    validarCampos
];