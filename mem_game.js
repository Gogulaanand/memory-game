var facingUpCount = 0;
var cardsFacingUp = [];
var score=0;
var board = document.getElementById('board');

if(document.readyState !== "loading"){
  setup();
}
else{
  document.addEventListener('DOMContentLoaded', function(event){
    event.preventDefault();
    setup();
  });
}

function setup(){
  // var collection = new DocumentFragment();
  // for(var i=0; i<12; i++){
  //   card = document.createElement('div');
  // var arr = ['card', `card${i+1}`]
  //   card.classList.add(...arr);
  //   collection.appendChild(card);
  // }
  // board.appendChild(collection);
  var listOfCards = document.getElementsByClassName('card');
  for(let card of listOfCards){
    card.addEventListener('click', flip);
  }
}

function flip(){
	if(facingUpCount<2){
		cardsFacingUp.push(this);
		this.style.border = '1px solid #ebf5fc';
		facingUpCount+=1;
		if(facingUpCount==2){
			setTimeout(checkForMatch(cardsFacingUp), 0);
		}
	}
};

function checkForMatch(list){
	var card1 = list[0];
	var card2 = list[1];
	var bg1 = window.getComputedStyle(card1).getPropertyValue('background-image');
	var bg2 = window.getComputedStyle(card2).getPropertyValue('background-image');
	if(bg1==bg2){
		console.log('match');
		card1.removeEventListener('click', flip);
		card2.removeEventListener('click', flip);
		score+=1;
		if(score==6){
			alert('You win!!');
		}
	}
	else{
		console.log('no match');
		card1.style.border = '60px solid #ebf5fc';
		card2.style.border = '60px solid #ebf5fc';
	}
	facingUpCount = 0;
	cardsFacingUp.length = 0;
}