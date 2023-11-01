const mongoose = require('mongoose')

//Funcion para conexion a bd
const conectarDB = async() =>{
    //crear el objeto de conexion 
   const conn = await mongoose.connect(
    'mongodb://127.0.0.1:27017/devcamp-ptech'
   )
   console.log("mongodb conectado".bgBlack.blue.underline)
}

module.exports = conectarDB
 