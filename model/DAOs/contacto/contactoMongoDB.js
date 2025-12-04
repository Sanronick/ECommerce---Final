import CnxMongoDB from "../../DBMongo.js"

class ModelMongoDB {
    constructor() {}

    guardarContacto = async contacto => {
        if(!CnxMongoDB.connectionOK) throw new Error('ERROR CNX BASE DE DATOS') 
        
        await CnxMongoDB.db.collection('contactos').insertOne(contacto)
        return contacto
    }
}

export default ModelMongoDB