import { body, param } from "express-validator";
import { validarCampos } from "./validar-campos.js";


export const obtenerPaquetesPorIdValidator = [
    param('id_cliente')
        .notEmpty()
        .withMessage('El parámetro id_cliente es requerido')
        .isInt()
        .withMessage('El parámetro id_cliente debe ser numérico')
        .isLength({ min: 8, max: 8 })
        .withMessage('El parámetro id_cliente debe tener una longitud de 8 caracteres'),

        validarCampos
];
