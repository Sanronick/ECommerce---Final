import Servicio from '../servicio/contactos.js'


class Controlador {
    #servicio = null

    constructor() {
        this.#servicio = new Servicio()
    }

    guardarContacto = async (req,res) => {
        try {
            const contacto = req.body


            if(!Object.keys(contacto).length) throw new Error('El contacto está vacío')

            const contactoGuardado = await this.#servicio.guardarContacto(contacto)
            res.json(contactoGuardado)
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    }
}


export default Controlador