const suits = ["diamonds", "hearts", "spades", "clubs"]
const values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
const rank = [14,2,3,4,5,6,7,8,9,10,11,12,13]


export default class Deck {
  constructor(cards=buildDeck()){
    this.cards = cards
  }

  shuffle() {
    for(let i = this.cards.length - 1; i > 0; i--){
      let index = Math.floor(Math.random() * (i+1))
      let temp = this.cards[index]
      this.cards[index] = this.cards[i]
      this.cards[i] = temp
    }
  }
}

class Card {
  constructor(suit, value, rank){
    this.suit = suit
    this.value = value
    this.rank= rank
  }
}

const buildDeck = () => {
  return suits.flatMap(suit => {
    return values.map((value, index) => {
      return new Card(suit,value,rank[index])
    })
  })
}