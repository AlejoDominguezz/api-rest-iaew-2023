import { body, param } from "express-validator";
import { validarCampos } from "./validar-campos.js";


export const crearPaqueteValidator = [
    body('titulo')
        .isString()
        .withMessage('El campo descripción debe ser un string')
        .isLength({ max: 150 })
        .withMessage('El campo titulo no debe tener más de 150 caracteres'),

    body('descripcion')
        .isString()
        .withMessage('El campo descripción debe ser un string')
        .isLength({ max: 1000 })
        .withMessage('El campo descripción no debe tener más de 1000 caracteres'),

    body('precio')
        .isNumeric()
        .withMessage('El campo precio debe ser un valor numérico'),

    validarCampos
];

export const modificarPaqueteValidator = [
    body('titulo')
        .optional()
        .isString()
        .withMessage('El campo descripción debe ser un string')
        .isLength({ max: 150 })
        .withMessage('El campo titulo no debe tener más de 150 caracteres'),

    body('descripcion')
        .optional()
        .isString()
        .withMessage('El campo descripción debe ser un string')
        .isLength({ max: 1000 })
        .withMessage('El campo descripción no debe tener más de 1000 caracteres'),

    body('precio')
        .optional()
        .isNumeric()
        .withMessage('El campo precio debe ser un valor numérico'),

    validarCampos
];



export const obtenerPaquetesValidator = [
    param('id')
        .isMongoId()
        .withMessage('El parámetro debe ser un Mongo ID válido'),

    validarCampos
];