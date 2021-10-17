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

var timerFullEl = document.getElementById('countdown-full');
var timerIndividualEl = document.getElementById('countdown-individual');

function countdownFull() {
  var timeLeftFull = 180;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeIntervalFull = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeftFull > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerFullEl.textContent = timeLeftFull + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeftFull--;
    } else if (timeLeftFull === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerFullEl.textContent = timeLeftFull + ' second remaining in the quiz';
      timeLeftFull--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerFullEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeIntervalFull);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

countdownFull();













var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
var words = message.split(' ');

// Timer that counts down from 5
function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();






var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();

  // create user object from submission
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };

  // set new submission to local storage 
  localStorage.setItem("user", JSON.stringify(user));

});
