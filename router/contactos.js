import express from 'express'

import Controlador from '../controlador/contactos.js'


class Router {
    #controlador = null
    constructor() {
        this.#controlador = new Controlador()
    }

    config() {
        const router = express.Router()

        
        router.post('/', this.#controlador.guardarContacto)


        return router
    }
}

export default Router