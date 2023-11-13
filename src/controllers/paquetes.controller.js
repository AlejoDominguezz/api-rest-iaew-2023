import { Paquete } from "../models/PaqueteTuristico";


export const GetPaquetes = async(req , res) => {
    
    
    
    
    res.status(200).json({message: "OK!"});
}



export const PostPaquetes = async(req , res) => {
    
    try {
        const {titulo, descripcion, precio} = req.body

        const paquete = new Paquete({
            titulo,
            descripcion,
            precio,
        })

        paquete.save()

        return res.json({paquete})

    } catch (error) {
        res.status(500).json({error: "Error de servidor"})
    }


    res.status(200).json({message: "OK!"});
}
export const PutPaquetes = async(req , res) => {
    res.status(200).json({message: "OK!"});
}
export const DeletePaquetes = async(req , res) => {
    res.status(200).json({message: "OK!"});
}