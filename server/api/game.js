const router = require('express').Router()
module.exports = router
const axios = require('axios');

const Round = require('../db/Round')
const Game = require('./gameUtil/gamejs.js')

//displays all rounds played in one game
router.get('/', async (req,res,next) => {
  try{
    const game = new Game()
    await game.deal()
    let results = []
    let count = 0
    while(game.gameState === "playing"){
      count = count+1
      console.log(`round`,count)
      if(count === 20000){
        results = {
          results: "players called it after 20k hands"
        }
        return
      }
      results = results.concat(await game.playHand())
      await game.checkGameState()
    }
    // if(game.winner == 2){
    //   console.log('CHEESY')
    // //   const shit = (await axios.put('https://localhost:3080/api/record/', {id: 2})).data
    // //   console.log(shit)
    // }else{
    //   console.log('CHEESY2def')
    // //   const fuck = (await axios.put('https://localhost:3080/api/record/', {id: 1})).data
    // //   console.log(fuck)
    // }
    res.send(results)
  }catch(ex){
    next(ex)
  }
})


//posts each round of game
router.post('/', async (req,res,next) => {
  try{
    res.status(201).send(await Round.create(req.body))
  }catch(ex){
    next(ex)
  }
})

