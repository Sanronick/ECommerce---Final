import Joi from "joi"

export const validar = contacto => {
    const contactoSchema = Joi.object({
        nombre: Joi.string().min(3).max(20).required(),
        mail: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        comentarios: Joi.string()

    })

    const { error } = contactoSchema.validate(contacto)
    if(error) {
        return { result: false, error }
    }
    return { result: true }
}