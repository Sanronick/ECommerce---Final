import config from "../config.js";
import ModelFactory from "../model/DAOs/contacto/contactoFactory.js"
import { validar } from "./validaciones/contacto.js"

class Servicio {
  #model = null

  constructor() {
    this.#model = ModelFactory.get(config.MODO_PERSISTENCIA_CONTACTO)
  }

  guardarContacto = async (contacto) => {
    const res = validar(contacto);
    if (res.result) {
      const contactoGuardado = await this.#model.guardarContacto(contacto)
      return contactoGuardado
    } else {
      throw new Error(res.error.details[0].message)
    }
  }
}

export default Servicio
