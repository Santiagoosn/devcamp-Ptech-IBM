const mongoose = require('mongoose')

//Definir el schema
//plano general de todo bootcamp
const bootcampSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [ true, "nombre requerido" ],
        unique: [ true , "nombre repetido" ],
    },
    phone:{
        type: Number,
        required: [ true, "telefono requerido" ],
        maxlength: [ 10 , "telefono muy largo" ],
    }, 
    address:{
        type: String,
        required: [ true, "direccion requerida" ],
        maxlength: [ 50 , "direccion muy extensa" ],
        minlength: [ 10 , "direccion muy corta" ],
    },
    topics:{
        type: [ String ], 
        enum: [ "AI" ,
                "Backend" , 
                "Frontend" , 
                "Devops"
            ]
    },
    createdAT: Date
})

//exportar el modelo 
const bootcampModel = mongoose
                .model("Bootcamp" ,
                bootcampSchema)

module.exports = bootcampModel