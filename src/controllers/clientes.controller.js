import { Paquete } from "../models/PaqueteTuristico.js"
import { Reserva } from "../models/ReservaPaquete.js"

export const GetPaquetesPorCliente = async (req, res) => {
    
    try {
        
        const id_cliente = req.params.id_cliente

        let paquetes = [];

        const reservas = await Reserva.find({id_cliente: id_cliente});
        
        for(const reserva of reservas){
            const paquete = await Paquete.findById(reserva.id_paquete)
                .select("-__v")
            if(paquete){
                paquetes.push(paquete)
            }
        }

        if(paquetes.length == 0){
            return res.status(204).json()
        }

        return res.json(paquetes)

    } catch (error) {
        return res.status(500).json({ error: "Error de servidor" })
    }
}