import Game from "./gameUtil/game.js"

const game = new Game()
game.deal()
game.playHand()
game.playHand()

// while(game.gameState === "playing"){
//   game.playHand()
//   game.checkGameState()
// }
