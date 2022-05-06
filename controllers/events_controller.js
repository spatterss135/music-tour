// DEPENDENCIES
const events = require('express').Router()
const db = require('../models')
const {Event} = db;

const {Op} = require('sequelize')


events.get('/', async(req, res)=> {
    try{
        const foundEvents = await Event.findAll()
        res.status(200).json(foundEvents)
        res.end()
    }
    catch(err){
        res.status(500).json(err)
        console.log('oop')
    }
 })


events.get('/:id',  async (req, res)=> {
    try{
        const foundEvent = await Event.findOne({
            where: {event_id: req.params.id}
        })
        res.status(200).json(foundEvent)
    }
    catch (err){
        res.status(500).json(err)
    }
}
)



events.post('/', async (req, res)=> {
    try{
        const newEvent = await Event.create(req.body)
        res.status(200)
    }
    catch(err){
        res.status(500).json(err)
    }
})

events.put('/:id', async (req, res)=> {
    try{
        const newEvent = await Event.update(req.body, {
            where: {event_id: req.params.id}
        })
        res.status(200)
    }
    catch(err){
        res.status(500).json(err)
    }
})


events.delete('/:id', async (req, res)=> {
    try{
        const eventToDelete = await Event.destroy({
            where: {event_id: req.params.id}
        })
        res.status(200)
    }
    catch(err){
        res.status(500).json(err)
    }
})









// EXPORTS
module.exports = events

