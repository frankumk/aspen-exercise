const router = require('express').Router()
const Player = require('../db/Player')
module.exports = router

//displays each players lifetime wins
router.get('/', async( req, res, next ) => {
  try{
    res.json(await Player.findAll())
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
    player.wins = player.wins+1
    await player.save()
    res.json(await Player.findAll())
  }catch(ex){
    next(ex)
  }
})