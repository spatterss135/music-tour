// DEPENDENCIES
const bands = require('express').Router()
const db = require('../models')
const {Band} = db;

const {Op} = require('sequelize')


bands.get('/', async(req, res)=> {
   try{
       console.log('HIHIHI')
       const foundBands = await Band.findAll({
           order: [['available_start_time', 'ASC']],
           where: {
               name: {
                   [Op.like]: `%${req.query.name? req.query.name: ''}%`
               }
           }
       })
       res.status(200).json(foundBands)
       res.end()
   }
   catch(err){
       res.status(500).json(err)
       console.log('oop')
   }
})


bands.get('/:id',  async (req, res)=> {
    try{
        const foundBand = await Band.findOne({
            where: {band_id: req.params.id}
        })
        res.status(200).json(foundBand)
    }
    catch (err){
        res.status(500).json(err)
    }

})


bands.post('/', async (req, res)=> {
    try{
        const newBand = await Band.create(req.body)
        res.status(200)
    }
    catch(err){
        res.status(500).json(err)
    }
})

bands.put('/:id', async (req, res)=> {
    try{
        const newBand = await Band.update(req.body, {
            where: {band_id: req.params.id}
        })
        res.status(200)
    }
    catch(err){
        res.status(500).json(err)
    }
})


bands.delete('/:id', async (req, res)=> {
    try{
        const bandToDelete = await Band.destroy({
            where: {band_id: req.params.id}
        })
        res.status(200)
    }
    catch(err){
        res.status(500).json(err)
    }
})









// EXPORTS
module.exports = bands