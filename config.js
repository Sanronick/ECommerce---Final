import dotenv from 'dotenv'

dotenv.config()


const PORT = process.env.PORT || 8080
const MODO_PERSISTENCIA_PRODUCTOS =  process.env.MODO_PERSISTENCIA_PRODUCTOS || 'MEM'
const MODO_PERSISTENCIA_PEDIDOS = process.env.MODO_PERSISTENCIA_PEDIDOS || 'MEM'
const MODO_PERSISTENCIA_CONTACTO = process.env.MODO_PERSISTENCIA_CONTACTO || 'MEM'
const STRCNX = process.env.STRCNX || 'mongodb://localhost:27017'
const BASE = process.env.BASE || 'test'
const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN || ''

export default {
    PORT,
    MODO_PERSISTENCIA_PRODUCTOS,
    MODO_PERSISTENCIA_PEDIDOS,
    MODO_PERSISTENCIA_CONTACTO,
    STRCNX,
    BASE,
    MP_ACCESS_TOKEN
}