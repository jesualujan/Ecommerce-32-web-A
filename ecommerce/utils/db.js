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

const db = { 
    connect,
    disconnect
}

export default db