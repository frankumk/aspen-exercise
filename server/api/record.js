const router = require('express').Router()
const Player = require('../db/Player')
module.exports = router

//displays each players lifetime wins
router.get('/', async( req, res, next ) => {
  try{
    res.send(await Player.findAll())
  }catch(ex){
    next(ex)
  }
})

//increases wins when game is won
router.put('/', async( req,res,next) =>{
  try{
    const player = await Player.findOne({
      where: {
        id: req.body.id
      }
    })
    player.wins = player.wins++
    await player.save()
    res.status(201).send(await Player.findAll())
  }catch(ex){

  }
})