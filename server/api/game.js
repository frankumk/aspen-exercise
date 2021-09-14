const router = require('express').Router()
module.exports = router

const Round = require('../db/Round')

//displays all rounds played in one game
router.get('/', async (req,res,next) => {
  try{
    res.send(await Round.findAll())
  }catch(ex){
    next(ex)
  }
})