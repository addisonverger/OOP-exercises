class Card {
  constructor(point, suit) {
    this.point = point;
    this.suit = suit;
  }
}

let myCard = new Card(5, 'diamonds')

console.log(myCard.point, myCard.suit)
