//changing image1
var randomNumber1=Math.floor((Math.random()*6)+1);
var img1 = document.querySelector("img.img1");
img1.setAttribute("src", "images/dice"+randomNumber1+".png");
// changing image2
var randomNumber2 = Math.floor((Math.random()*6)+1);
var img2 = document.querySelector("img.img2");
img2.setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1<randomNumber2){
  document.getElementById("win1").innerHTML = "Player2 WIN";
}else if (randomNumber1>randomNumber2) {
  document.getElementById("win1").innerHTML = "player1 WIN";
}else{
  document.getElementById("win1").innerHTML = "DRAW";
}
