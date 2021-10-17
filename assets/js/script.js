var question1 = {
  question: "question 1 filler text",
  answer1: "box 1 (correct)",
  answer2: "box 2",
  answer3: "box 3",
  answer4: "box 4",
  correct: 1,
};
var question2 = {
  question: "question 2 filler text",
  answer1: "box 1",
  answer2: "box 2 (correct)",
  answer3: "box 3",
  answer4: "box 4",
  correct: 2,
};
var question3 = {
  question: "question 3 filler text",
  answer1: "box 1",
  answer2: "box 2",
  answer3: "box 3 (correct)",
  answer4: "box 4",
  correct: 3,
};
var question4 = {
  question: "question 4 filler text",
  answer1: "box 1",
  answer2: "box 2",
  answer3: "box 3",
  answer4: "box 4 (correct)",
  correct: 4,
};
var question5 = {
  question: "question 5 filler text",
  answer1: "box 1 (correct)",
  answer2: "box 2",
  answer3: "box 3",
  answer4: "box 4",
  correct: 1,
};
var question6 = {
  question: "question 6 filler text",
  answer1: "box 1",
  answer2: "box 2 (correct)",
  answer3: "box 3",
  answer4: "box 4",
  correct: 2,
};

var questionArray = [question1, question2, question3, question4, question5, question6];

var answer1Btn = document.getElementById('answer1');
var answer2Btn = document.getElementById('answer2');
var answer3Btn = document.getElementById('answer3');
var answer4Btn = document.getElementById('answer4');
var quitBtn = document.getElementById('quitBtn');
var highScoreBtn = document.getElementById('highScoreBtn');
var score = 0;
var currentQuestion = 0;
var questionFeedback = document.getElementById('questionFeedback');


var gameBeforeEl = document.querySelector('.gameBefore');
var gameFinishEl = document.querySelector('.gameFinish');
var gameRunEl = document.querySelector('.gameRun');
gameRunEl.hidden = true;
gameFinishEl.hidden = true;

var quizStartBtn = document.getElementById('quizStart');

var timerFullEl = document.getElementById('countdown-full');
var timerIndividualEl = document.getElementById('countdown-individual');
var timeLeftFull;
var timeLeftIndividual;

function countdownFull(quit) {
  timeLeftFull = 180;
  var timeIntervalFull = setInterval(function () {
    if (timeLeftFull >= 1) {
      timerFullEl.textContent = timeLeftFull + ' second remaining in the quiz';
      timeLeftFull--;
    } else {
      countdownFull(true);
      countdownIndividual(true);
      gameRunEl.hidden = true;
      gameFinishEl.hidden = false;
    }
  }, 1000);
  if (quit === true) {
    timerFullEl.textContent = '';
    clearInterval(timeIntervalFull);
    timeLeftFull = 0;
  }
}

function countdownIndividual(quit) {
  timeLeftIndividual = 30;
  var timeIntervalIndividual = setInterval(function () {
    if (timeLeftIndividual >= 1) {
      timerIndividualEl.textContent = timeLeftIndividual + ' second remaining for this question';
      timeLeftIndividual--;
    } else {
      timerIndividualEl.textContent = '';
      clearInterval(timeIntervalIndividual);
      nextQuestion();
      countdownIndividual();
    }
  }, 1000);
  if (quit === true) {
    timerIndividualEl.textContent = '';
    clearInterval(timeIntervalIndividual);
    timeLeftIndividual = 0;
  }
}

function scoreUpdate(choice) {
  if (choice === (questionArray[currentQuestion - 1].correct)) {
    score += 10 + timeLeftIndividual;
    questionFeedback.textContent = 'Correct';
    document.getElementById('scorePrint').textContent = "Your score was " + score;
    return;
  }
  timeLeftFull -= 20;
  questionFeedback.textContent = 'Wrong';
}

function nextQuestion() {
  if (currentQuestion === questionArray.length) {
    countdownFull(true);
    countdownIndividual(true);
    gameRunEl.hidden = true;
    gameFinishEl.hidden = false;
    questionFeedback.textContent = '';
  } else {
    document.getElementById('questionText').textContent = questionArray[currentQuestion].question;
    answer1Btn.textContent = questionArray[currentQuestion].answer1;
    answer2Btn.textContent = questionArray[currentQuestion].answer2;
    answer3Btn.textContent = questionArray[currentQuestion].answer3;
    answer4Btn.textContent = questionArray[currentQuestion].answer4;
    currentQuestion += 1;
  }
}

highScoreBtn.addEventListener("click", function (event) {
  countdownFull(true);
  countdownIndividual(true);
  gameRunEl.hidden = true;
  gameFinishEl.hidden = true;
  gameBeforeEl.hidden = true;
  questionFeedback.textContent = '';
  window.alert(localStorage.highScore);
});

quizStartBtn.addEventListener("click", function (event) {
  gameRunEl.hidden = false;
  gameBeforeEl.hidden = true;
  countdownIndividual();
  countdownFull();
  nextQuestion();
});

answer1Btn.addEventListener("click", function (event) {
  scoreUpdate(1);
  nextQuestion();
});

answer2Btn.addEventListener("click", function (event) {
  scoreUpdate(2);
  nextQuestion();
});

answer3Btn.addEventListener("click", function (event) {
  scoreUpdate(3);
  nextQuestion();
});

answer4Btn.addEventListener("click", function (event) {
  scoreUpdate(4);
  nextQuestion();
});

quitBtn.addEventListener("click", function (event) {
  countdownFull(true);
  countdownIndividual(true);
  gameRunEl.hidden = true;
  gameFinishEl.hidden = false;
});

var initialsInput = document.getElementById('initials');
var submissionInput = document.getElementById('submission');
var highScore = {};

submissionInput.addEventListener("click", function (event) {
  highScore = {
    initials: document.getElementById('initials').value,
    score: score,
  };
  localStorage.setItem("highScore", JSON.stringify(highScore));
});
