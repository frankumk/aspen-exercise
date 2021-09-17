const Game = require("./gamejs.js")

const playGame = async () =>{
  const game = new Game()
  await game.deal()
  let results = []
  let count = 0
  while(game.gameState === "playing"){
    count = count+1
    console.log(`round`,count)
    results = results.concat(await game.playHand())
    if(count === 5000){
      console.log("Player's called it a tie after 5000 rounds")
      break
    }
    await game.checkGameState()
  }
  return results
}

module.exports = playGame