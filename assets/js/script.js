var question1 = {
  question: "question 1 filler text",
  answer1: "box 1 (correct)",
  answer2: "box 2",
  answer3: "box 3",
  answer4: "box 4",
  correct: "answer1",
};
var question2 = {
  question: "question 2 filler text",
  answer1: "box 1",
  answer2: "box 2 (correct)",
  answer3: "box 3",
  answer4: "box 4",
  correct: "answer2",
};
var question3 = {
  question: "question 3 filler text",
  answer1: "box 1",
  answer2: "box 2",
  answer3: "box 3 (correct)",
  answer4: "box 4",
  correct: "answer3",
};
var question4 = {
  question: "question 4 filler text",
  answer1: "box 1",
  answer2: "box 2",
  answer3: "box 3",
  answer4: "box 4 (correct)",
  correct: "answer4",
};
var question5 = {
  question: "question 5 filler text",
  answer1: "box 1 (correct)",
  answer2: "box 2",
  answer3: "box 3",
  answer4: "box 4",
  correct: "answer1",
};
var question6 = {
  question: "question 6 filler text",
  answer1: "box 1",
  answer2: "box 2 (correct)",
  answer3: "box 3",
  answer4: "box 4",
  correct: "answer2",
};

var questionArray = [question1, question2, question3, question4, question5, question6];

var answer1Btn = document.getElementById('#answer1');
var answer2Btn = document.getElementById('#answer2');
var answer3Btn = document.getElementById('#answer3');
var answer4Btn = document.getElementById('#answer4');

var gameBeforeEl = document.querySelector('.gameBefore');
var gameFinishEl = document.querySelector('.gameFinish');
var gameStartEl = document.querySelector('.gameStart');

var timerFullEl = document.getElementById('countdown-full');
var timerIndividualEl = document.getElementById('countdown-individual');

function countdownFull() {
  var timeLeftFull = 180;
  var timeIntervalFull = setInterval(function () {
    if (timeLeftFull >= 1) {
      timerFullEl.textContent = timeLeftFull + ' second remaining in the quiz';
      timeLeftFull--;
    } else {
      //change to end quiz function
      timerFullEl.textContent = '';
      clearInterval(timeIntervalFull);
      displayMessage();
    }
  }, 1000);
}

function countdownIndividual() {
  var timeLeftIndividual = 30;
  var timeIntervalIndividual = setInterval(function () {
    if (timeLeftIndividual >= 1) {
      timerIndividualEl.textContent = timeLeftIndividual + ' second remaining for this question';
      timeLeftIndividual--;
    } else {
      //Change to next question function
      timerIndividualEl.textContent = '';
      clearInterval(timeIntervalIndividual);
      displayMessage();
    }
  }, 1000);
}

var quizStartBtn = document.getElementById('#quizStart');
gameStartEl.hidden = true;
gameFinishEl.hidden = true;


answer1Btn.addEventListener("click", function (event) {
});
answer2Btn.addEventListener("click", function (event) {
});
answer3Btn.addEventListener("click", function (event) {
});
answer4Btn.addEventListener("click", function (event) {
});
quizStartBtn.addEventListener("click", function (event) {
});




var questionFeedback = document.getElementById('questionFeedback');
questionFeedback.textContent = 'if statement boolean';






var highScore = {
  initials: '',
  score: '',
};

localStorage.setItem("highScore", JSON.stringify(highScore));


