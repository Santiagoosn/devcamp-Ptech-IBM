//dependencias del proyecto
const express = require ('express')
const dotenv = require ('dotenv')
const colors = require ('colors')
//dependencia de conexion:
const conectarDB = require ('./config/db')
//dependencias de rutas
const bootcampsRoutes = require ('./routes/bootcampRoutes')

//configurar dotenv
dotenv.config({
    path: "./config/.env"
})

//conexion a bd
conectarDB()

//crear objeto de app express
const app = express()

//habilitar express para recibir body en formato json
app.use(express.json())

//establecer rutas de proyecto 
app.use ('/api/v1/bootcamps', 
        bootcampsRoutes ) 

//crear servidor de aplicaciones
app.listen( process.env.PUERTO, 
    () => {
    console.log(`Servidor express ejecutando ${process.env.PUERTO}`.bgCyan.yellow.underline)
} 
)