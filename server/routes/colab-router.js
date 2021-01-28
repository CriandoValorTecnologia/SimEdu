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
                        cargo: saved.cargo,
                        certificacao: saved.certificacao,
                        formacao: saved.formacao,
                        rpps: saved.rpps
                    }
                })
            }).catch(error => res.status(500).json({
                success: false,
                error: error
            }))
    })

    router.post('/findid', (req, res) => {
        let info = req.body

        ColabSchema.find({_id: info.id})
            .then(colab => {
                res.status(201).json({
                    success: true,
                    colab: colab
                })
            }).catch(error => res.status(500).json({
                success: false,
                error: error
            }))
    })

    router.post('/findrpps', (req, res) => {
        let info = req.body

        ColabSchema.find({rpps: info.rpps})
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

    router.post('/update', async (req, res) => {
        let info = req.body

        try {
        const colab = await ColabSchema.updateOne({
            _id: info.id
            },{
                $set: {
                    nome: info.nome,
                    cargo: info.cargo,
                    fomarcao: info.fomarcao,
                    certificacao: info.certificacao,
                    rpps: info.rpps
                }
            })

            if(colab) {
                const colabs = await ColabSchema.find({ _id: info.id })
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

    router.post('/delete', async (req, res) => {
        let info = req.body

        try {
            const colab = await ColabSchema.deleteOne({
                _id: info.id
                })
    
                if(colab) {
                    const colabs = await ColabSchema.find({ _id: info.id })
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