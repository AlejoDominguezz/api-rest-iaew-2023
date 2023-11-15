import { body, param } from "express-validator";
import { validarCampos } from "./validar-campos.js";


export const crearPaqueteValidator = [
    body('titulo')
        .notEmpty()
        .withMessage('El campo titulo es requerido')
        .isString()
        .withMessage('El campo titulo debe ser un string')
        .isLength({ max: 150 })
        .withMessage('El campo titulo no debe tener más de 150 caracteres'),

    body('descripcion')
        .notEmpty()
        .withMessage('El campo descripción es requerido')
        .isString()
        .withMessage('El campo descripción debe ser un string')
        .isLength({ max: 1000 })
        .withMessage('El campo descripción no debe tener más de 1000 caracteres'),

    body('precio')
        .notEmpty()
        .withMessage('El campo precio es requerido')
        .isNumeric()
        .withMessage('El campo precio debe ser un valor numérico'),

    validarCampos
];

export const modificarPaqueteValidator = [
    param('id')
        .isMongoId()
        .withMessage('El parámetro debe ser un Mongo ID válido'),

    body('titulo')
        .notEmpty()
        .withMessage('El campo titulo es requerido')
        .isString()
        .withMessage('El campo titulo debe ser un string')
        .isLength({ max: 150 })
        .withMessage('El campo titulo no debe tener más de 150 caracteres'),

    body('descripcion')
        .notEmpty()
        .withMessage('El campo descripción es requerido')
        .isString()
        .withMessage('El campo descripción debe ser un string')
        .isLength({ max: 1000 })
        .withMessage('El campo descripción no debe tener más de 1000 caracteres'),

    body('precio')
        .notEmpty()
        .withMessage('El campo precio es requerido')
        .isNumeric()
        .withMessage('El campo precio debe ser un valor numérico'),

    validarCampos
];



export const obtenerPaqueteByIdValidator = [
    param('id')
        .isMongoId()
        .withMessage('El parámetro debe ser un Mongo ID válido'),

    validarCampos
];
