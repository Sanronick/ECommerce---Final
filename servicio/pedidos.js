import config from '../config.js'
import ModelFactory from '../model/DAOs/pedidos/pedidosFactory.js'
import './pago.js'
import { preference } from './pago.js'


class Servicio {
    #model = null

    constructor() {
        this.#model = ModelFactory.get(config.MODO_PERSISTENCIA_PEDIDOS)
    }

    obtenerPedidos = async function() {
        const pedidos = await this.#model.obtenerPedidos()
        return pedidos
    }

    guardarPedido = async pedido => {
        const pedidoGuardado = await this.#model.guardarPedido(pedido)
        return pedidoGuardado
    }

    createPreference = async datos => {
        console.log(datos)
        try{
            const preferences = await preference.create(datos.prefItems)
            console.log(preferences)
            return preferences.id
        }
        catch(error){
            throw new Error(`Error en createPreference" ${error.message}`)
        }
        
    }
}

export default Servicio