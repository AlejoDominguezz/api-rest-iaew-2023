import { body } from "express-validator";
import { validarCampos } from "./validar-campos.js";
import { Paquete } from "../models/PaqueteTuristico.js";


const fechaPosteriorActual = (value) => {
    const fechaInput = new Date(value);

    // Verifica si la fecha es válida y si es posterior a la fecha actual
    return !isNaN(fechaInput.getTime()) && fechaInput > new Date();
};


const existePaquete = async (value) => {
    const id_paquete = value;
    const paquete = await Paquete.findById(id_paquete);
    return !!paquete; // Devuelve true si el paquete existe, false si no existe
};

export const crearReservaValidator = [
    body('id_cliente')
        .notEmpty()
        .withMessage('El campo id_cliente es requerido')
        .isInt()
        .withMessage('El campo id_cliente debe ser numérico')
        .isLength({ min: 8, max: 8 })
        .withMessage('El campo id_cliente debe tener una longitud de 8 caracteres'),
    body('id_paquete')
        .notEmpty()
        .withMessage('El campo id_paquete es requerido')
        .isMongoId()
        .withMessage('El campo id_paquete debe ser ID de Mongo válido')
        .custom((value) => existePaquete(value).then(existe => {
            if (!existe) {
                throw new Error('El campo id_paquete contiene un ID de un paquete no registrado');
            }
        }))
        .withMessage('El campo id_paquete contiene un ID de un paquete no registrado'),
    body('fecha_reserva')
        .notEmpty()
        .withMessage('El campo fecha_reserva es requerido')
        .custom(fechaPosteriorActual)
        .withMessage('El campo fecha_reserva debe ser una fecha válida y posterior a la fecha actual'),
    body('precio_total')
        .notEmpty()
        .withMessage('El campo fecha_reserva es requerido')
        .isFloat({min: 0})
        .withMessage('El campo precio_total debe ser un valor numérico positivo'),

    validarCampos
];


