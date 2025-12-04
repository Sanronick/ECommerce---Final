import ModelFile from "./contactoFile.js"
import ModelMongoDB from "./contactoMongoDB.js"


class ModelFactory {
    static get(tipo) {
        switch(tipo) {
            
            case 'FILE':
                console.log('*** Persistiendo en File System (contacto) ***')
                return new ModelFile()

            case 'MONGODB':
                console.log('*** Persistiendo en Base de Datos MongoDB (contacto) ***')
                return new ModelMongoDB()

            default:
                console.log('*** Persistiendo en Memoria (default) (contacto) ***')
                return new ModelMem()
        }
    }
}

export default ModelFactory