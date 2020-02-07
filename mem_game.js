var facingUpCount = 0;
var cardsFacingUp = [];
var score=0;
var board = document.getElementById('board');


// function checkForMatch(list){
// 	var card1 = list[0].style.background;
// 	var card2 = list[1].style.background;
// 	if(card1===card2){
// 		score+=1;
// 		if(score==6){
// 			alert('You win!!');
// 			return true;
// 		}
// 	}
// 	// else{}
// }

function flip(card){
	if(facingUpCount<2){
		styles = window.getComputedStyle(card);
	console.log(styles.getPropertyValue('background'));
		console.log(styles);
	}
	else if(facingUpCount===2){
		checkForMatch(cardsFacingUp);
	}
};

function setup(){
  // collection = new DocumentFragment();
  // for(var i=0; i<12; i++){
  //   card = document.createElement('div');
  //   card.classList.add('card', `card$(i+1)`);
  //   collection.appendChild(card);
  // }
  // board.appendChild(collection);
  var listOfCards = document.getElementsByClassName('card');
  for(let card of listOfCards){
    card.addEventListener('click', function(e){
    flip(card);
    });
  }
}

if(document.readyState !== "loading"){
  setup();
}
else{
  document.addEventListener('DOMContentLoaded', function(event){
    event.preventDefault();
    setup();
  });
}