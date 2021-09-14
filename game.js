import Deck from './deck.js'

export default class Game {
  constructor(){
    this.deck = new Deck()
    this.playerOneCardCount = 26
    this.playerTwoCardCount = 26
    this.playerOneDeck = []
    this.playerTwoDeck = []
    this.gameState = "playing"
  }
  
  startGame(){
    console.log(this.deck.cards)
    this.deck.shuffle()

    this.playerOneDeck = this.deck.cards.slice(0, 26)
    this.playerTwoDeck = this.deck.cards.slice(26)
    console.log(this.playerOneDeck)
    console.log(this.playerTwoDeck)
  }

    playHand(){
      const play = [this.playerOneDeck.shift()]
      play.push(this.playerTwoDeck.shift())
      console.log(`play`, play)
      console.log(this.playerOneDeck.length)
      console.log(this.playerTwoDeck.length)
      const handResult = determineRoundWinner(this.playerOneDeck, this.playerTwoDeck, play)
      this.playerOneDeck = handResult.playerOne
      this.playerTwoDeck = handResult.playerTwo
      
      console.log(handResult.winner)
      console.log(this.playerOneDeck)
      console.log(this.playerTwoDeck)
      console.log(this.playerOneDeck.length)
      console.log(this.playerTwoDeck.length)


      //this.playerOneDeck.push([playerOneCard, playerTwoCard)
      //this.playerTwoDeck.push([playerOneCard, playerTwoCard])

      //this.playerOneCardCount = this.playerOneDeck.length
      //this.playerTwoCardCount = this.playerTwoDeck.length
    }

    checkGameState(){
      if(this.playerOneCardCount===0){
        this.gameState = "player one wins"
      }else if(this.playerTwoCardCount === 0){
          this.gameState = "player two wins"
      }else{
        return
      }
    }
}

const determineRoundWinner = (playerOneDeck, playerTwoDeck, discards) => {
  let winner
  console.log(discards)
  let playerOne = discards[discards.length-2]
  let playerTwo = discards[discards.length-1]
      if(playerOne.rank > playerTwo.rank){
        winner = "playerOne"
        console.log(`p1c`,playerOneDeck)
        console.log(`p2c`,playerTwoDeck)
        discards.forEach(discard => playerOneDeck.push(discard))
      }else if(playerTwo.rank > playerOne.rank){
        winner = "playerTwo"
        console.log(`p1c`,playerOneDeck)
        console.log(`p2c`,playerTwoDeck)
        discards.forEach(discard => playerTwoDeck.push(discard))
      }else{
        console.log(`p1c`,playerOneDeck)
        console.log(`p2c`,playerTwoDeck)
        console.log("tie war game")
        for(let i = 0; i < 2; i++){
          discards.push(playerOneDeck.shift())
          discards.push(playerTwoDeck.shift())
        }
        determineRoundWinner(playerOneDeck, playerTwoDeck, discards)
      }
      console.log(`winner`, winner)
      return {
        playerOne: playerOneDeck,
        playerTwo: playerTwoDeck,
        winner: winner
      }
      
}

const goToWar = (oneDeck, twoDeck, discards) => {
  console.log(discards)
  discards.push(oneDeck.shift())
  discards.push(twoDeck.shift())
}
