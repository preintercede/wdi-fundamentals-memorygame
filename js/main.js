console.log("Up and running");

let cards = ["queen", "queen", "king", "king"];
let cardsinPlay = [];
let cardOne = cards[0];
cardsinPlay.push(cardOne);
let cardTwo = cards[2];
cardsinPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsinPlay.length === 2) {
  if (cardsinPlay[0] === cardsinPlay[1]) {
    alert("You found a match");
  } else {
    alert("Sorry try again");
  }
}
