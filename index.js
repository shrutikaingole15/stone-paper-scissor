//img 1
var randomHand1 = Math.floor(Math.random() * 3)+ 1;
var randomHandImage1 = "images/hand" + randomHand1 + ".png";

var image1  = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomHandImage1);

//img2
var randomHand2 = Math.floor(Math.random() * 3) + 1;
var randomHandImage2 = "images/hand" + randomHand2 + ".png";

var image2  = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomHandImage2);

//if
if (randomHand1 == 1 && randomHand2 == 2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else if (randomHand1 == 2 && randomHand2 == 1){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomHand1 == 2 && randomHand2 == 3){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else if (randomHand1 == 3 && randomHand2 == 2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomHand1 == 1 && randomHand2 == 3){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomHand1 == 3 && randomHand2 == 1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}
