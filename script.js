var body = document.body;

var quizNote =
  "Try to answer the following code related questions withing the time limit. Keep in mind that incorect answers will penalize your scoretime by ten seonds!";

var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var h3El = document.createElement("h3");
var h4El = document.createElement("h4");
// var divEl = document.createElement("div");
var breakP = document.createElement("br");
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

    console.log("seconds left = " + secondsLeft);

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      clearQuestions();
      results();
    }
  }, 1000);
}

var qNum = 0;
function displayQuestionCtl() {
  console.log("displayQuestionCtl");
  h1El.textContent = "Question - " + (qNum + 1);
  body.appendChild(h1El);
  h4El.textContent = getQuestion(qNum);
  body.appendChild(h4El);

  quizBtnE1.textContent = getChoiceA(qNum);
  quizBtnE1.setAttribute("class", "btn");
  quizBtnE1.setAttribute("id", "quizBtnE1");
  body.appendChild(quizBtnE1);
  q1 = document.querySelector("#quizBtnE1");

  quizBtnE2.textContent = getChoiceB(qNum);
  quizBtnE2.setAttribute("class", "btn");
  quizBtnE2.setAttribute("id", "quizBtnE2");
  body.appendChild(quizBtnE2);
  q2 = document.querySelector("#quizBtnE2");

  quizBtnE3.textContent = getChoiceC(qNum);
  quizBtnE3.setAttribute("class", "btn");
  quizBtnE3.setAttribute("id", "quizBtnE3");
  body.appendChild(quizBtnE3);
  q3 = document.querySelector("#quizBtnE3");

  quizBtnE4.textContent = getChoiceD(qNum);
  quizBtnE4.setAttribute("class", "btn");
  quizBtnE4.setAttribute("id", "quizBtnE4");
  body.appendChild(quizBtnE4);
  q4 = document.querySelector("#quizBtnE4");

  console.log("q1 value =  " + q1);
  console.log("q2 value =  " + q2);
  console.log("q3 value =  " + q3);
  console.log("q4 value =  " + q4);
}

q1.addEventListener("click", function () {
  console.log("q1.addEventListener");
  console.log("after = " + q1);
  body.removeChild(h1El);
  body.removeChild(h4El);
  body.removeChild(quizBtnE1);
});

q2.addEventListener("click", function () {
  console.log("q2.addEventListener");
  console.log("after = " + q2);
  body.removeChild(h1El);
  body.removeChild(h4El);
  body.removeChild(quizBtnE1);
});

q3.addEventListener("click", function () {
  console.log("q3.addEventListener");
  console.log("after = " + q3);
  body.removeChild(h1El);
  body.removeChild(h4El);
  body.removeChild(quizBtnE1);
});

q4.addEventListener("click", function () {
  console.log("q4.addEventListener");
  console.log("after = " + q4);
  body.removeChild(h1El);
  body.removeChild(h4El);
  body.removeChild(quizBtnE1);
});

function clearQuestions() {
  body.removeChild(h1El);
  body.removeChild(h4El);
  body.removeChild(quizBtnE1);
  body.removeChild(quizBtnE2);
  body.removeChild(quizBtnE3);
  body.removeChild(quizBtnE4);
  body.removeChild(h3El);
}

function displayQuestion() {
  h1El.textContent = "Question - " + questionNumber;
  body.appendChild(h1El);

  h4El.textContent = "lkajsdfjas;lfja";
  body.appendChild(h4El);
  displayCount += 1;
  console.log("display question " + displayCount);
}

function results() {
  h2El.textContent = "Report Score";
  body.appendChild(h2El);
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
