const validate = require ('../middleware/validate')
const router = require('express').Router()
require('dotenv').config()
const ColabSchema = require('../model/schemas/colab')

function routes(){
    router.post('/new', (req, res) => {
        let colab = req.body

        const newColab = new ColabSchema(colab)

        newColab.save()
            .then(saved => {
                res.status(201).json({
                    success: true,
                    colab: {
                        nome: saved.nome,
                        email: saved.email,
                        idade: saved.idade,
                        fomarcao: saved.fomarcao,
                        certificacao: saved.certificacao
                    }
                })
            }).catch(error => res.status(500).json({
                success: false,
                error: error
            }))
    })

    router.post('/my', (req, res) => {
        let info = req.body

        ColabSchema.find({email: info.email})
            .then(colab => {
                res.status(201).json({
                    success: true,
                    colabs: colab
                })
            }).catch(error => res.status(500).json({
                success: false,
                error: error
            }))
    })

    router.post('/update', validate, async (req, res) => {
        let info = req.body

        try {
        const colab = await ColabSchema.updateOne({
            _id: info.id
            },{
                $set: {
                    colab: info.nome,
                    email: info.email,
                    idade: info.idade,
                    fomarcao: info.fomarcao,
                    certificacao: info.certificacao
                }
            })

            if(colab) {
                const colabs = await ColabSchema.find({ email: info.email })
                res.status(200).json({
                    success:true,
                    colabs: colabs
                })
            }
        }catch (error){
            res.status(500).json({
                success: false,
                error: error
            })
        }
    })

    router.post('/delete', validate, async (req, res) => {
        let info = req.body

        try {
            const colab = await ColabSchema.deleteOne({
                _id: info.id
                })
    
                if(colab) {
                    const colabs = await ColabSchema.find({ email: info.email })
                    res.status(200).json({
                        success:true,
                        colabs: colabs
                    })
                }
            }catch (error){
                res.status(500).json({
                    success: false,
                    error: error
                })
            }
    })

    return router;
}

module.exports = routes