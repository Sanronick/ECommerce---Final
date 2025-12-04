import ModelFile from "./pedidosFile.js"
import ModelMongoDB from "./pedidosMongoDB.js"


class ModelFactory {
    static get(tipo) {
        switch(tipo) {
            
            case 'FILE':
                console.log('*** Persistiendo en File System (pedidos) ***')
                return new ModelFile()

            case 'MONGODB':
                console.log('*** Persistiendo en Base de Datos MongoDB (pedidos) ***')
                return new ModelMongoDB()

            default:
                console.log('*** Persistiendo en Memoria (default) (pedidos) ***')
                return new ModelMem()
        }
    }
}

export default ModelFactory