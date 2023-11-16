import { Reserva } from "../models/ReservaPaquete.js";

export const getReservas = async (req , res) => {

    try {

        const reservas = await Reserva.find()
        .select("-__v")
        .lean()
        .exec()
        if(reservas.length == 0) {
            return res.status(204).json()
        }
        
        return res.status(200).json(reservas)

    } catch (err) {
        return res.status(500).json({error: 'Error del servidor'});
    }
}



export const postReservas = async(req , res) => {
    const {
        id_cliente,
        fecha_reserva,
        precio_total,
        id_paquete,
    } = req.body

    try {
        const reserva = new Reserva({
            id_cliente,
            fecha_reserva,
            precio_total,
            id_paquete,
        })

        await reserva.save()

        return res.status(201).json({ msg: "Paquete creado exitosamente", reserva });

    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Error de servidor" })
    }
}

