import { Paquete } from "../models/PaqueteTuristico.js";
import { validarTitulo } from "../services/validarTitulo.js";


export const GetPaquetes = async(req , res) => {
    try {
        const paquetes = await Paquete.find()
        .select("-__v")
        .lean()
        .exec()

        return res.json({paquetes})
    } catch (error) {
        res.status(500).json({error: "Error de servidor"})
    }
}


export const GetPaqueteById = async(req , res) => {
    try {
        const {id} = req.params;
        const paquete = await Paquete.findById(id)
        .select("-__v")
        .lean()
        .exec()

        if (!paquete)
            return res.status(404).json({ error: `No existe un paquete con ID ${id}` });

        return res.json({paquete})
    } catch (error) {
        res.status(500).json({error: "Error de servidor"})
    }
}



export const PostPaquetes = async(req , res) => {
    try {
        const {titulo, descripcion, precio} = req.body

        const existePaquete = await validarTitulo(titulo, null);
        if(existePaquete){
            return res.status(409).json({ error: `Ya existe un paquete con un título '${titulo}'. Por favor, ingrese un título diferente.` });
        }

        const paquete = new Paquete({
            titulo,
            descripcion,
            precio,
        })

        await paquete.save()

        return res.status(201).json({msg: "Paquete creado exitosamente", paquete: paquete})

    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Error de servidor"})
    }
}


export const PutPaquetes = async(req , res) => {
    try {
        
        const {id} = req.params;
        const {titulo, descripcion, precio} = req.body;

        let paquete = await Paquete.findById(id)
        if (!paquete)
            return res.status(404).json({ error: `No existe un paquete con ID ${id}` });

        
        const existePaquete = await validarTitulo(titulo, id);
        if(existePaquete){
            return res.status(409).json({ error: `Ya existe un paquete con un título '${titulo}'. Por favor, ingrese un título diferente.` });
        }

        paquete.titulo = titulo ?? proyecto.titulo;
        paquete.descripcion = descripcion ?? paquete.descripcion;
        paquete.precio = precio ?? paquete.precio;

        await paquete.save()
        return res.status(200).json({msg: `El paquete con ID ${id} fue modificado exitosamente`, paquete: paquete})

    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Error de servidor"})
    }
}



export const DeletePaquetes = async(req , res) => {
    try {
        const {id} = req.params;
        const paquete = await Paquete.findById(id)
        if (!paquete)
            return res.status(404).json({ error: `No existe un paquete con ID ${id}` });

        await paquete.deleteOne()
        return res.status(200).json({msg: `El paquete con ID ${id} fue eliminado exitosamente`})

    } catch (error) {
        return res.status(500).json({error: "Error de servidor"})
    }
}