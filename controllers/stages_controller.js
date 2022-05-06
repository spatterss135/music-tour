// DEPENDENCIES
const stages = require('express').Router()
const db = require('../models')
const {Stage} = db;

const {Op} = require('sequelize')


stages.get('/', async(req, res)=> {
    try{
        const foundStages = await Stage.findAll()
        res.status(200).json(foundStages)
        res.end()
    }
    catch(err){
        res.status(500).json(err)
        console.log('oop')
    }
 })


stages.get('/:id',  async (req, res)=> {
    try{
        const foundStage = await Stage.findOne({
            where: {stage_id: req.params.id}
        })
        res.status(200).json(foundStage)
    }
    catch (err){
        res.status(500).json(err)
    }
}
)



stages.post('/', async (req, res)=> {
    try{
        const newStage = await Stage.create(req.body)
        res.status(200)
    }
    catch(err){
        res.status(500).json(err)
    }
})

stages.put('/:id', async (req, res)=> {
    try{
        const newStage = await Stage.update(req.body, {
            where: {stage_id: req.params.id}
        })
        res.status(200)
    }
    catch(err){
        res.status(500).json(err)
    }
})


stages.delete('/:id', async (req, res)=> {
    try{
        const stageToDelete = await Stage.destroy({
            where: {stage_id: req.params.id}
        })
        res.status(200)
    }
    catch(err){
        res.status(500).json(err)
    }
})









// EXPORTS
module.exports = stages