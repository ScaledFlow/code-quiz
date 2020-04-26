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
var qNum = 0;
var dispQNum = 0;
var clearQuestionCtn = 0;
var finalScore = 0;

var answeredA = "";
var answeredB = "";
var answeredC = "";
var answeredD = "";
var correctAnswer = "";

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
  displayQuestionCtl();
});

function prepQuiz() {
  var score = 0;
  var highScore = localStorage.getItem("highScore");

  if (highScore === null) {
    setHighScore(score);
  }
}

function setTime() {
  // body.appendChild(h1El);
  var timerInterval = setInterval(function () {
    secondsLeft--;

    h3El.textContent = "Seconds Remaining = " + secondsLeft;
    body.appendChild(h3El);

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      clearQuestions();
      clearTimer();
      results();
    }
  }, 1000);
}

function displayQuestionCtl() {
  console.log(qNum);
  dispQNum = qNum;
  h1El.textContent = "Question - " + (dispQNum + 1);
  body.appendChild(h1El);
  h4El.textContent = getQuestion(qNum);
  body.appendChild(h4El);

  // correctAnswer = getAnswer(qNum);
  // console.log("correctAnswer = " + correctAnswer);

  quizBtnE1.textContent = getChoiceA(qNum);
  answeredA = getChoiceA(qNum);
  correctAnswer = getAnswer(qNum);
  console.log("asnweredA = " + answeredA);
  console.log("correctAnswer = " + correctAnswer);
  quizBtnE1.setAttribute("class", "btn");
  quizBtnE1.setAttribute("id", "quizBtnE1");
  body.appendChild(quizBtnE1);
  q1 = document.querySelector("#quizBtnE1");

  quizBtnE2.textContent = getChoiceB(qNum);
  answeredB = getChoiceB(qNum);
  correctAnswer = getAnswer(qNum);
  console.log("asnwered = " + answeredB);
  console.log("correctAnswer = " + correctAnswer);
  quizBtnE2.setAttribute("class", "btn");
  quizBtnE2.setAttribute("id", "quizBtnE2");
  body.appendChild(quizBtnE2);
  q2 = document.querySelector("#quizBtnE2");

  quizBtnE3.textContent = getChoiceC(qNum);
  answeredC = getChoiceC(qNum);
  correctAnswer = getAnswer(qNum);
  console.log("asnweredC = " + answeredC);
  console.log("correctAnswer = " + correctAnswer);
  quizBtnE3.setAttribute("class", "btn");
  quizBtnE3.setAttribute("id", "quizBtnE3");
  body.appendChild(quizBtnE3);
  q3 = document.querySelector("#quizBtnE3");

  quizBtnE4.textContent = getChoiceD(qNum);
  answeredD = getChoiceD(qNum);
  correctAnswer = getAnswer(qNum);
  console.log("asnwereD = " + answeredD);
  console.log("correctAnswer = " + correctAnswer);
  quizBtnE4.setAttribute("class", "btn");
  quizBtnE4.setAttribute("id", "quizBtnE4");
  body.appendChild(quizBtnE4);
  q4 = document.querySelector("#quizBtnE4");

  qNum++;

  q1.addEventListener("click", function () {
    if (answeredA === correctAnswer) {
      finalScore += 10;
    } else {
      finalScore -= 10;
    }
    console.log(finalScore);
    console.log("q1");
    clearQuestions();
  });

  q2.addEventListener("click", function () {
    if (answeredB === correctAnswer) {
      finalScore += 10;
    } else {
      finalScore -= 10;
    }
    console.log(finalScore);
    console.log("q2");
    clearQuestions();
  });

  q3.addEventListener("click", function () {
    if (answeredC === correctAnswer) {
      finalScore += 10;
    } else {
      finalScore -= 10;
    }
    console.log(finalScore);
    console.log("q3");
    clearQuestions();
  });

  q4.addEventListener("click", function () {
    if (answeredD === correctAnswer) {
      finalScore += 10;
    } else {
      finalScore -= 10;
    }
    console.log(finalScore);
    console.log("q4");
    clearQuestions();
  });
}

function clearTimer() {}

function clearQuestions() {
  clearQuestionCtn += 1;
  console.log("clearQuestions");
  body.removeChild(h1El);
  body.removeChild(h4El);
  body.removeChild(quizBtnE1);
  body.removeChild(quizBtnE2);
  body.removeChild(quizBtnE3);
  body.removeChild(quizBtnE4);
  //body.removeChild(h3El);
  if (secondsLeft > 0 && clearQuestionCtn < 6) {
    displayQuestionCtl();
    console.log("clear questions seconds left" + secondsLeft);
  } else {
    sectionsLeft = 0;
    results();
  }
}

function results() {
  h2El.textContent = "All Done!";
  body.appendChild(h2El);
  h4El.textContent = "Your score is " + finalScore;
  body.appendChild(h4El);
  setHighScore(finalScore);
}

function setHighScore(finalScore) {
  // body.appendChild(h2El);
  console.log("last high score " + lastHighScore);
  if (finalScore > lastHighScore) {
    localStorage.setItem("highScore", finalScore);
    // var testst = localStorage.getItem("highScore");
    // h3El.textContent = "You have the high Score!";
    // body.appendChild(h3El);
    h2El.textContent = "High Score!";
    body.appendChild(h2El);

    console.log("update local storage = " + testst);
    console.log("Set the high score to = " + finalScore);
  }
}

function resetHighScore() {
  localStorage.setItem("highScore", 0);
}

function removeLocalStorage() {
  localStorage.removeItem("highScore");
}

//resetHighScore();
