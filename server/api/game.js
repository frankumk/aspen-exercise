const router = require('express').Router()
module.exports = router

const playGame = require('./gameUtil/script.js')

//displays all rounds played in one game
router.get('/', async (req,res,next) => {
  try{
    const results = await playGame()
    res.json(results)
  }catch(ex){
    next(ex)
  }
})

