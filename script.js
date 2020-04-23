var body = document.body;

var quizNote =
  "Try to answer the following code related questions withing the time limit. Keep in mind that incorect answers will penalize your scoretime by ten seonds!";

var h1El = document.createElement("h1");
var h4El = document.createElement("h4");
// var divEl = document.createElement("div");
var buttonEl = document.createElement("button");
var buttonE2 = document.createElement("button");

var quizQuestions = [
  {
    question:
      "__________ was the creator of JavaScript which was originally name Livescript.",
    answers: {
      a: "Bill Gates",
      b: "Marc Andreessen",
      c: "Brendan Eich",
      d: "Ray Tomlinson",
    },
    answer: "c",
  },

  {
    question: "In Javascript, objects are __________ -based.",
    answers: {
      a: "keyword",
      b: "factory",
      c: "class",
      d: "prototype",
    },
    answer: "d",
  },

  {
    question:
      "Javascript needs to be compiled into an intermmediate code called bytecode.",
    answers: {
      a: "True",
      b: "False",
    },
    answer: "b",
  },

  {
    question: "Javascript is __________ typed language.",
    answers: {
      a: "weakly",
      b: "strongly",
      c: "dynamically",
      d: "none of the above",
    },
    answer: "a",
  },

  {
    question:
      "A weakly typed language has looser typing rules and my produce unpredictable results.",
    answers: {
      a: "True",
      b: "False",
    },
    answer: "a",
  },

  {
    question: "Unlike Java, Javascript has defined data types.",
    answers: {
      a: "True",
      b: "False",
    },
    answer: "b",
  },

  {
    question:
      "The statement car.start() can best be descripted as a __________.",
    answers: {
      a: "Method",
      b: "Object",
      c: "Property",
      d: "Data Type",
    },
    answer: "b",
  },

  {
    question:
      "The statement car.start() can best be descripted as a __________.",
    answers: {
      a: "Method",
      b: "Object",
      c: "Property",
      d: "Data Type",
    },
    answer: "b",
  },

  {
    question:
      "Which can be used to dynamically change the behavior, display and interactions of a page.",
    answers: {
      a: "HTML",
      b: "JavaScript",
      c: "CSS",
    },
    answer: "c",
  },

  {
    question:
      "Which can be used to dynamically change the behavior, display and interactions of a page.",
    answers: {
      a: "HTML",
      b: "JavaScript",
      c: "CSS",
    },
    answer: "c",
  },

  {
    question:
      "Which can be used to dynamically change the behavior, display and interactions of a page.",
    answers: {
      a: "HTML",
      b: "JavaScript",
      c: "CSS",
    },
    answer: "c",
  },

  {
    question:
      "Which immediately-Invoked Function Expression will give an Uncaught SyntaxError.",
    answers: {
      a: "var foo = (function () {})();",
      b: "function foo() {}();",
      c: "function myFunction() {return;}",
      d: "function name() {}",
    },
    answer: "b",
  },

  {
    question:
      "When JavaScript reaches a return statement, the function will stop executing.",
    answers: {
      a: "True",
      b: "False",
    },
    answer: "a",
  },

  {
    question:
      "In JavaScript if not return value is specified, the function will return _________.",
    answers: {
      a: "return",
      b: "null",
      c: "undefined",
      d: "SyntaxError",
    },
    answer: "a",
  },

  {
    question:
      "Parameters are used when defining a function, they are the names created in the function definition.",
    answers: {
      a: "True",
      b: "False",
    },
    answer: "a",
  },

  {
    question:
      "Arguments are the values the function receives from each parameter when the function is executed (invoked).",
    answers: {
      a: "True",
      b: "False",
    },
    answer: "a",
  },

  {
    question: "An anonymous function uses a variable for its name.",
    answers: {
      a: "True",
      b: "False",
    },
    answer: "b",
  },

  {
    question: "Which comparison operator will return false",
    answers: {
      a: "console.log(1 == 1);",
      b: "console.log('1' == 1);",
      c: "console.log(1 === 1);",
      d: "console.log('1' === 1);",
    },
    answer: "d",
  },

  {
    question:
      "A callback function is a function which is passed into another function as an argument which is then invoked inside the outer function to complete some kind of routine or action.",
    answers: {
      a: "True",
      b: "False",
    },
    answer: "a",
  },
];

var foo = (function () {
  var count = 0;
})();

// function foo() {
//   var count = 0;
// }();

function name() {}

function myFunction() {
  return;
}

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
  prepQuiz();
  startTimer();
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

function startTimer() {
  console.log("Timer Started");
}

function setHighScore(score) {
  localStorage.setItem("highScore", score);
  console.log("Set the score to = " + score);
}
