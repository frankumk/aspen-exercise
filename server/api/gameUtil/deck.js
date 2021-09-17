const suits = ["diamonds", "hearts", "spades", "clubs"]
const values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
const rank = [14,2,3,4,5,6,7,8,9,10,11,12,13]


class Deck {
  constructor(cards=buildDeck()){
    this.cards = cards
  }

  //fisher-yates
  shuffle() {
    var m = this.cards.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
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

module.exports = Deck