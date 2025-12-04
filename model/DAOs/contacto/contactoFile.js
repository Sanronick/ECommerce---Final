import fs from 'fs'

class ModelFile {
    #nombreArchivo = ''

    constructor() {
        this.#nombreArchivo = 'contacto.json'
    }

    // --------------- Funciones para acceder al sistema de archivo (read/write) -------------
    #leerArchivo = async nombre => {
        let contactos = []
        try {
            contactos = JSON.parse(await fs.promises.readFile(nombre, 'utf-8'))
        }
        catch {}

        return contactos
    }

    #escribirArchivo = async (nombre, contactos) => {
        await fs.promises.writeFile(nombre, JSON.stringify(contactos, null, '\t'))
    }
    // ---------------------------------------------------------------------------------------

    guardarContacto = async contacto => {
        const contactos = await this.#leerArchivo(this.#nombreArchivo)
        contacto.id = String((parseInt(contactos[contactos.length-1]?.id) || 0) + 1)
        contactos.push(contacto)
        await this.#escribirArchivo(this.#nombreArchivo, contactos)

        return contacto
    }
}

export default ModelFile