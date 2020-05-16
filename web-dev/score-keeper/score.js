var p1button=document.querySelector("#p1");
var p2button=document.getElementById("p2");
var resetbutton=document.getElementById("reset");
var p1display=document.querySelector("#p1display");
var p2display=document.querySelector("#p2display");
var num=document.querySelector("input");
var p=document.querySelector("p");
var scoredisplay=document.querySelector("p span");
var p1score=0;
var p2score=0;
var gameOver=false;
var winningScore=5;

p1button.addEventListener("click", function(){
 if(!gameOver){
  p1score++;
  if(p1score===winningScore){
    p1display.classList.add("winner");
    gameOver=true;
  }
  p1display.textContent=p1score;
 }
 });

p2button.addEventListener("click", function(){
  if(!gameOver){
  p2score++;
    if(p2score===winningScore){
      p2display.classList.add("winner");
    gameOver=true;
  }
  p2display.textContent=p2score;
  }
  });
resetbutton.addEventListener("click", function(){
  reset();
});
function reset(){
 p1score=0;
  p2score=0;
  p1display.textContent=p1score;
  p2display.textContent=p2score;
  p1display.classList.remove("winner");
  p2display.classList.remove("winner");
  gameOver=false;
}
num.addEventListener("change",function(){
  scoredisplay.textContent=this.value;
  winningScore= Number(this.value);
  reset();
});