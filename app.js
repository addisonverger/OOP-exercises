//Person

class Person {
  constructor(name, email, phone) {
      this.name = name;
      this.email = email;
      this.phone = phone;
  }
  greet(otherPerson) {
    console.log('Hello ' + otherPerson.name + ', I am ' + this.name + '!');
  }
}

let sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948')

let jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456')

sonny.greet(jordan)
jordan.greet(sonny)

console.log('Contact Info: ' + sonny.email + ', ' + sonny.phone)
console.log('Contact Info: ' + jordan.email + ', ' + jordan.phone)

//Card

class Card {
  constructor(point, suit) {
    this.point = point;
    this.suit = suit;
  }
  getImageUrl() {
    return ('images/' + this.point + '_of_' + this.suit + '.png')
  }
}

let myCard = new Card(5, 'diamonds')

console.log(myCard.point, myCard.suit)

//Hand

class Hand {
  constructor(handArray) {
    this.handArray = []
  }
  addCard(card) {
    this.handArray.push(card)
  }
  getPoints() {
    let totalPoints = 0
    this.handArray.forEach(card => totalPoints += card.point)
    return totalPoints
  }
}
