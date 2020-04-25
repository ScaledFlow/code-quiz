var body = document.body;

var quizNote =
  "Try to answer the following code related questions withing the time limit. Keep in mind that incorect answers will penalize your scoretime by ten seonds!";

var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var h3El = document.createElement("h3");
var h4El = document.createElement("h4");
// var divEl = document.createElement("div");
var buttonEl = document.createElement("button");
var quizBtnE1 = document.createElement("button");
var quizBtnE2 = document.createElement("button");
var quizBtnE3 = document.createElement("button");
var quizBtnE4 = document.createElement("button");

var secondsLeft = 5;
var sessionScore = 0;
var lastHighScore = 0;
var questionNumber = 0;
var displayCount = 0;

init();

function init() {
  lastHighScore = localStorage.getItem("highScore");
  if (lastHighScore === null) {
    localStorage.setItem("highScore", 0);
  }
  h1El.textContent = "Coding Quiz Challenge";
  body.appendChild(h1El);

  h4El.textContent = quizNote;
  body.appendChild(h4El);

  buttonEl.textContent = "Start Quiz";
  buttonEl.setAttribute("class", "btn");
  buttonEl.setAttribute("id", "quizStart");
  body.appendChild(buttonEl);
  btnQS = document.querySelector("#quizStart");
}

btnQS.addEventListener("click", function () {
  body.removeChild(h1El);
  body.removeChild(h4El);
  body.removeChild(buttonEl);
  setTime();
  prepQuiz();
});

function prepQuiz() {
  console.log("preQuiz");
  var score = 0;
  var highScore = localStorage.getItem("highScore");

  if (highScore === null) {
    setHighScore(score);
    console.log("highScore Value = " + highScore);
  }
  displayQuestionCtl();
}

function setTime() {
  console.log("Set Time");
  // body.appendChild(h1El);
  var timerInterval = setInterval(function () {
    secondsLeft--;

    h3El.textContent = "Seconds Remaining = " + secondsLeft;
    body.appendChild(h3El);

    console.log("do something " + secondsLeft);

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      results();
    }
  }, 1000);
}

var qNum = 0;
function displayQuestionCtl() {
  console.log("displayQuestionCtl");
  h1El.textContent = "Question - " + (qNum + 1);
  body.appendChild(h1El);
  h4El.textContent = getChoiceA(qNum);
  body.appendChild(h4El);

  quizBtnE1.textContent = getChoiceA(qNum);
  quizBtnE1.setAttribute("class", "btn");
  quizBtnE1.setAttribute("id", "quizBtnE1");
  body.appendChild(quizBtnE1);
  var q1 = document.querySelector("#quizBtnE1");

  quizBtnE2.textContent = "Quiz selection 2";
  quizBtnE2.setAttribute("class", "btn");
  quizBtnE2.setAttribute("id", "quizBtnE1");
  body.appendChild(quizBtnE2);
  var q2 = document.querySelector("#quizBtnE2");

  quizBtnE3.textContent = "Quiz selection 3";
  quizBtnE3.setAttribute("class", "btn");
  quizBtnE3.setAttribute("id", "quizBtnE3");
  body.appendChild(quizBtnE3);
  var q3 = document.querySelector("#quizBtnE3");

  quizBtnE4.textContent = "Quiz selection 4";
  quizBtnE4.setAttribute("class", "btn");
  quizBtnE4.setAttribute("id", "quizBtnE4");
  body.appendChild(quizBtnE4);
  var q2 = document.querySelector("#quizBtnE4");

  console.log("before = " + q1);
}

q1.addEventListener("click", function () {
  console.log("q1.addEventListener");
  console.log("after 2 = " + q1);
  body.removeChild(h1El);
  body.removeChild(h4El);
  body.removeChild(quizBtnE1);
});

q2.addEventListener("click", function () {
  console.log("q1.addEventListener");
  console.log("after 2 = " + q2);
  body.removeChild(h1El);
  body.removeChild(h4El);
  body.removeChild(quizBtnE1);
});

function displayQuestion() {
  h1El.textContent = "Question - " + questionNumber;
  body.appendChild(h1El);

  h4El.textContent = "lkajsdfjas;lfja";
  body.appendChild(h4El);
  displayCount += 1;
  console.log("display question " + displayCount);
}

function results() {
  // body.removeChild(h1El);
  console.log("results");
  // body.removeChild(h3El);
  // h2El.textContent = "Report Score";
  // body.removeChild(h4El);

  // body.appendChild(h2El);
}

function setHighScore(sessionScore) {
  // body.appendChild(h2El);

  if (sessionScore < highScore) {
    localStorage.setItem("highScore", score);
    console.log("Set the score to = " + score);
  }
}

function resetHighScore() {
  localStorage.setItem("highScore", 0);
}

function removeLocalStorage() {
  localStorage.removeItem("highScore");
}
