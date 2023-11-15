import { Paquete } from "../models/PaqueteTuristico.js";


export const GetPaquetes = async(req , res) => {
    try {
        const paquetes = await Paquete.find();
        return res.json({paquetes})
    } catch (error) {
        res.status(500).json({error: "Error de servidor"})
    }
}



export const PostPaquetes = async(req , res) => {
    try {
        const {titulo, descripcion, precio} = req.body

        const paquete = new Paquete({
            titulo,
            descripcion,
            precio,
        })

        await paquete.save()

        return res.status(201).json({paquete})

    } catch (error) {
        res.status(500).json({error: "Error de servidor"})
    }
}


export const PutPaquetes = async(req , res) => {
    try {
        
        const {id} = req.params;
        const {titulo, descripcion, precio} = req.body;

        let paquete = await Paquete.findById(id)
        if (!paquete)
            return res.status(404).json({ error: "No existe el paquete" });

        paquete.titulo = titulo ?? proyecto.titulo;
        paquete.descripcion = descripcion ?? paquete.descripcion;
        paquete.precio = precio ?? paquete.precio;

        await paquete.save()
        return res.status(200).json({paquete})

    } catch (error) {
        return res.status(500).json({error: "Error de servidor"})
    }
}



export const DeletePaquetes = async(req , res) => {
    try {
        const {id} = req.params;
        const paquete = await Paquete.findById(id)
        await paquete.deleteOne()
        return res.status(204).json()

    } catch (error) {
        return res.status(500).json({error: "Error de servidor"})
    }
}