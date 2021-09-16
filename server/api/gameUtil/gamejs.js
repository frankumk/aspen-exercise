const Deck = require('./deck.js')
const axios = require('axios')

class Game {
  constructor(){
    this.deck = new Deck()
    this.playerOneDeck = []
    this.playerTwoDeck = []
    this.gameState = "playing"
    this.roundWinner = ''
    this.winner = null
  }

  p1CardCount(){
    return this.playerOneDeck.length
  }
  
  p2CardCount(){
    return this.playerTwoDeck.length
  }
  
  deal(){
    this.deck.shuffle()
    this.deck.shuffle()
    this.playerOneDeck = this.deck.cards.slice(0, 26)
    this.playerTwoDeck = this.deck.cards.slice(26)
  }

    playHand(){
      const play = [this.playerOneDeck.shift()]
      play.push(this.playerTwoDeck.shift())
      const handResult = this.determineRoundWinner(this.playerOneDeck, this.playerTwoDeck, play)
      this.playerOneDeck = handResult.playerOne
      this.playerTwoDeck = handResult.playerTwo

      const result = {
        handWinner: this.roundWinner,
        p1hand: play[0],
        p2hand: play[1],
        playerOneCardCount: this.p1CardCount(),
        playerTwoCardCount: this.p2CardCount()
      }
      console.log(result)
      this.roundWinner = ''
      return result

    }

    determineRoundWinner(playerOneDeck, playerTwoDeck, discards){
      //console.log(discards)
      let playerOne = discards[discards.length-2]
      let playerTwo = discards[discards.length-1]
          if(playerOne.rank > playerTwo.rank){
            console.log(`p1winsround`)
            this.roundWinner = "playerOne"
            discards.forEach(discard => playerOneDeck.push(discard))
          }else if(playerTwo.rank > playerOne.rank){
            console.log(`p2winsround`)
            this.roundWinner = "playerTwo"
            discards.forEach(discard => playerTwoDeck.push(discard))
          }else{
            console.log("TIE BREAKER")
            if(playerTwoDeck.length <= 2 || playerOneDeck.length <= 2){
              //UGLY - would improve later
              //In essence of time, not dealing with tie & 1 card situation.
              //If one player has 1 card after a tie, the other player wins by getting all the cards
              if(playerTwoDeck.length > playerOneDeck.length){
                playerTwoDeck = playerTwoDeck.concat(playerOneDeck).concat(discards)
                playerOneDeck = []
              }else{
                playerOneDeck = playerOneDeck.concat(playerTwoDeck).concat(discards)
                playerTwoDeck = []
              }
            }else{
              for(let i = 0; i < 2; i++){
                discards.push(playerOneDeck.shift())
                discards.push(playerTwoDeck.shift())
              }
              this.determineRoundWinner(playerOneDeck, playerTwoDeck, discards)
            }
    
          }
          return {
            playerOne: playerOneDeck,
            playerTwo: playerTwoDeck
          }
        }

    async checkGameState(){
      if(this.p1CardCount() <= 0){
          await axios.put('http://localhost:3080/api/record', {id: 2})
          console.log("player Two wins game")
          this.winner = 2
          this.gameState = "player two wins game"
      }else if(this.p2CardCount() <= 0){
        await axios.put('http://localhost:3080/api/record', {id: 1})
        console.log("player One wins game")
        this.winner = 1
        this.gameState = "player one wins game"
      }else{
        console.log("game play keeps going")
        return
      }
    }
}

module.exports = Game