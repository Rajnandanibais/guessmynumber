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

  if(guess===secreteNumber){
      message.textContent='you are correct';
      number.textContent=secreteNumber;

  }else if(guess>secreteNumber){
      message.textContent='you are too high';
      score--;
      displayScore.textContent=score;

  }else if(guess < secreteNumber){
      message.textContent='you are too low';
      score--;
      displayScore.textContent=score;
  }

    }
    else{
        message.textContent='provide right input';
    }
 })