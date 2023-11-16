import { Paquete } from "../models/PaqueteTuristico.js";

export const validarTitulo = async (titulo, id) => {
    let paquete = null;
    if(id == null){
        paquete = await Paquete.findOne({titulo: titulo})
    } else {
        paquete = await Paquete.findOne({titulo: titulo, _id: {$ne:id}})
    }

    if (!paquete){
        return false;
    } 
    return true;
}