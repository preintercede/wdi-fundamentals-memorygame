console.log("Up and running");

let cards = ["queen", "queen", "king", "king"];
let cardsinPlay = [];

function checkForMatch() {
  if (cardsinPlay[0] === cardsinPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}

function flipCard(cardId) {
  cardsinPlay.push(cards[cardId]);
  console.log("User flipped " + cards[cardId]);
}

flipCard(2);
flipCard(3);
checkForMatch();

// if (cardsinPlay.length === 2) {
//   if (cardsinPlay[0] === cardsinPlay[1]) {
//     alert("You found a match");
//   } else {
//     alert("Sorry try again");
//   }
// }
