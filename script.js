'use strict'
var secreteNumber=Math.trunc(Math.random()*20+1);
const number=document.querySelector('.number');

const btnAgain = document.querySelector('.btn-again');
const btnCheck=document.querySelector('.btn-check');

var message=document.querySelector('.message');

 var score=20;
 const displayScore=document.querySelector('.score');
 displayScore.textContent=score;

 var highscore=0;
 const displayHighscore=document.querySelector('.highscore');
 displayHighscore.textcontent=highscore;

 btnCheck.addEventListener('click',function() {
     const guess=Number(document.querySelector('.guess').value);

    if(score>0){
       if(guess> 0&&guess<20){ 

  if(guess===secreteNumber){
      message.textContent='you are correct';
      alert("Congratulation!!!")
      number.textContent=secreteNumber;
      if(score>highscore){
          highscore=score;
          displayHighscore.textContent=highscore;
      }

  }else if(guess>secreteNumber){
      alert("Try a smaller number");
      message.textContent="you are too high";
      score--;
      displayScore.textContent=score;

  }else if(guess < secreteNumber){
      alert("Try a greater number");
      message.textContent='you are too low';
      score--;
      displayScore.textContent=score;
  }
    else{
        message.textContent='provide right input';
    } }
}else {
    message.textContent='you lost the Game'
    number.textContent=secreteNumber;

    secreteNumber=Math.trunc(math.random()*20+1);
    number.textContent=secreteNumber;
    score=20;
    displayScore.textContent=score;
    document.querySelector('.guess').value='';

    }
 });


 btnAgain.addEventListener('click',function(){
   
   secreteNumber=Math.trunc(Math.random()*20+1);
   document.querySelector('.number').value;
number.textcontent=document.querySelector('.number').value;
   score=20;
   displayScore.textContent=score;

   message.textContent='start Guessing';
   document.querySelector('.guess').value='';


 });