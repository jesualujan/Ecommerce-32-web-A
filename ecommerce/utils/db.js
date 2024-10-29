import mongoose from 'mongoose'

const connection = {}

async function connect(){
    if(connection.isConnected){
        console.log('Conexión Exitosa 🚀')
        return
    }
    if(mongoose.connections.length > 0){
        connection.isConnected = mongoose.connections[0].readyState
    if(connection.isConnected === 1){
        console.log('Usuario ya conectado 💻')
        return
    }
    await mongoose.disconnect()
    }

// establecer la conección a la base de datos
const db = await mongoose.connect(process.env.MONGODB_URI);
console.log('nueva conexión 🧍')
connection.isConnected = db.connections[0].readyState
}


async function disconnect() {
    if(connection.isConnected){
        if(process.env.NODE_ENV === 'production'){
            await mongoose.disconnect()
            connection.isConnected = false
        }else{
            console.log('conectado 💻')
        }
    }
}

// tranformar documentos (o registros) en objetos en el contexto de bases de datos.
function convertDocToObj(doc){
    doc._id = doc._id.toString() // Convierte un valor de la propiedad "id" a una cadena 
    //timeStamp
    doc.createdAt = doc.createdAt.toString() // Convierte el valor de la propiedad "createdAt" a una cadena
    doc.updatedAt = doc.updatedAt.toString() // Convierte el valor de la propiedad "updatedAt" a una cadena
    return doc // devuelve el objeto modificado
}

const db = { 
    connect,
    disconnect,
    convertDocToObj
}

export default db