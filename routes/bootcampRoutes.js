const express = require('express')
const bootcampModel = require('../models/bootcampModel')

//definir ruteador
const router = express.Router()

//definir rutas de bootcamps con el ruteador 
router.get('/', async (req , res) => {
    //seleccionar todos los bootcamps en la coleccion
    const bootcamps =
        await bootcampModel.find()

    res.json({
        success: true,
        result: bootcamps

    })
})
//seleccionar bootcamp por id
router.get('/:id' , async (req , res) => {
    //recoger el parametro de la url
    bootcampid = req.params.id
    //seleccionar el bootcamp por id
    selected_bootcamp = await bootcampModel.
        findById(bootcampid)
    //enviar respuesta
    res.json({
        success:true,
        results: selected_bootcamp
    })
})

//crear bootcamp
router.post('/', async(req , res)=>{
    const newBootcamp = await bootcampModel.
                            create(req.body)
    res.json({
        success: true,
        results: newBootcamp
    })
})

//exportar ruteador
module.exports = router

