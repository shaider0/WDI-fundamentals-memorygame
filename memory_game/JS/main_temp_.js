//array of objects with properties rank, suit, and cardImage
var cards = [
{rank: "Queen", suit: "hearts", cardImage: "images/queen-of-hearts.png" },
{rank: "Queen", suit: "diamonds", cardImage: "images/queen-of-diamonds.png" },
{rank: "King", suit: "hearts", cardImage: "images/king-of-hearts.png"},
{rank: "King", suit: "diamonds", cardImage: "images/king-of-diamonds.png"}
]

//empty array of cards in play
var cardsInPlay = [];

//function to add cards to the game board HTML using DOM manipulation
var createBoard = function() {

	var flipCard = function(){

		var cardId = this.getAttribute("data-id");

		this.setAttribute("src", cards[cardId].cardImage);

		cardsInPlay.push(cards[cardId].rank);

		var checkForMatch = function(){

			if (cardsInPlay.length===2){
				if(cardsInPlay[0]===cardsInPlay[1]){
					alert("You found a match!");
				}
				else{
					alert("Sorry, try again");
				}
			}
		}
		checkForMatch();
	}

	for (var i=0; i<cards.length; i++){
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

createBoard();

var button = document.querySelector("button"); 

var reset = function() {

	for (var i=0; i<cardsInPlay.length; i++){
	var image = document.getElementsByTagName("img");
	image.remove();
	}

	cardsInPlay = [];
}

button.addEventListener("click", reset);