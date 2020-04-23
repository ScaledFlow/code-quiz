var body = document.body;

var quizNote =
  "Try to answer the following code related questions withing the time limit. Keep in mind that incorect answers will penalize your scoretime by ten seonds!";

var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var h3El = document.createElement("h3");
var h4El = document.createElement("h4");
// var divEl = document.createElement("div");
var buttonEl = document.createElement("button");
var buttonE2 = document.createElement("button");

var secondsLeft = 3;

init();

function init() {
  // divEl.setAttribute("class", "container");
  // body.appendChild(divEl);

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
  console.log("Start Quiz");
  var score = 0;
  var highScore = localStorage.getItem("highScore");
  //localStorage.removeItem("highScore");
  if (highScore === null) {
    setHighScore(score);
    console.log("highScore Value = " + highScore);
  }
}

function setTime() {
  console.log("Set Time");
  var timerInterval = setInterval(function () {
    secondsLeft--;
    // timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
    h3El.textContent = "Time Remaining = " + secondsLeft;
    body.appendChild(h3El);

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      results();
    }
  }, 1000);
}

function results() {
  console.log("results");
  body.removeChild(h3El);
  h2El.textContent = "Report Score";
  body.appendChild(h2El);
}

function setHighScore(score) {
  body.appendChild(h2El);
  localStorage.setItem("highScore", score);
  console.log("Set the score to = " + score);
}
