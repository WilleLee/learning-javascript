const gameForm = document.querySelector(".game-form");
const maxNumInput = document.querySelector(".max-num-container input");
const answerInput = document.querySelector(".answer-container input");
const resultBox = document.querySelector(".result-box");

const resultGuess = resultBox.querySelector(".result-guess");
const resultAnswer = resultBox.querySelector(".result-answer");
const result = resultBox.querySelector("h3");

const HIDDEN_CLASSNAME = "hidden";
const WIN_TEXT = "You won!";
const LOST_TEXT = "You lost!";

const handleGameSubmit = (event) => {
  event.preventDefault();
  // had to apply the parseInt method on these, cause they(input.values) seemed to be treated as strings 
  const maxNum = parseInt(maxNumInput.value);
  const guess = parseInt(answerInput.value);
  const answer = Math.floor(Math.random() * (maxNum + 1));

  resultGuess.innerText = guess;
  resultAnswer.innerText = answer;
  
  if(guess === answer){
    result.innerText = WIN_TEXT;
  }else{
    result.innerText = LOST_TEXT;
  }

  resultBox.classList.remove(HIDDEN_CLASSNAME);
}

gameForm.addEventListener("submit", handleGameSubmit);
