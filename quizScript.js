var quizQuestions = [
  {
    question:
      "Who was the creator of JavaScript which was originally name Livescript.",
    choices: {
      a: "Bill Gates",
      b: "Marc Andreessen",
      c: "Brendan Eich",
      d: "Ray Tomlinson",
    },
    answer: {
      correct: "Brendan Eich",
    },
  },

  {
    question: "In Javascript, objects are __________ -based.",
    choices: {
      a: "keyword",
      b: "factory",
      c: "class",
      d: "prototype",
    },
    answer: {
      correct: "prototype",
    },
  },

  {
    question:
      "Javascript needs to be compiled into an intermmediate code called bytecode.",
    choices: {
      a: "True",
      b: "False",
    },
    answer: {
      correct: "False",
    },
  },

  {
    question: "Javascript is __________ typed language.",
    choices: {
      a: "weakly",
      b: "strongly",
      c: "dynamically",
      d: "none of the above",
    },
    answer: {
      correct: "Weakly",
    },
  },

  {
    question:
      "A weakly typed language has looser typing rules and my produce unpredictable results.",
    choices: {
      a: "True",
      b: "False",
    },
    answer: {
      correct: "True",
    },
  },

  {
    question: "Unlike Java, Javascript has defined data types.",
    choices: {
      a: "True",
      b: "False",
    },
    answer: {
      correct: "True",
    },
  },

  {
    question:
      "The statement car.start() can best be descripted as a __________.",
    choices: {
      a: "Method",
      b: "Object",
      c: "Property",
      d: "Data Type",
    },
    answer: {
      correct: "Object",
    },
  },

  {
    question:
      "The statement car.start() can best be descripted as a __________.",
    choices: {
      a: "Method",
      b: "Object",
      c: "Property",
      d: "Data Type",
    },
    answer: {
      correct: "Object",
    },
  },

  {
    question:
      "Which can be used to dynamically change the behavior, display and interactions of a page.",
    choices: {
      a: "HTML",
      b: "CSS",
      c: "Javascript",
      d: "JSON",
    },
    answer: {
      correct: "CSS",
    },
  },

  {
    question:
      "Which immediately-Invoked Function Expression will give an Uncaught SyntaxError.",
    choices: {
      a: "function foo() {}();",
      b: "var foo = (function () {})();",
      c: "function myFunction() {return;}",
      d: "function name() {}",
    },
    answer: {
      correct: "function foo() {}();",
    },
  },

  {
    question:
      "When JavaScript reaches a return statement, the function will not stop executing.",
    choices: {
      a: "True",
      b: "False",
    },
    answer: {
      correct: "False",
    },
  },

  {
    question:
      "In JavaScript if not return value is specified, the function will return _________.",
    choices: {
      a: "SyntaxError",
      b: "null",
      c: "undefined",
      d: "return",
    },
    answer: {
      correct: "return",
    },
  },

  {
    question:
      "Parameters are used when defining a function, they are the names created in the function definition.",
    choices: {
      a: "True",
      b: "False",
    },
    answer: {
      correct: "True",
    },
  },

  {
    question:
      "Arguments are the values the function receives from each parameter when the function is executed (invoked).",
    choices: {
      a: "True",
      b: "False",
    },
    answer: {
      correct: "False",
    },
  },

  {
    question: "An anonymous function uses a variable for its name.",
    choices: {
      a: "True",
      b: "False",
    },
    answer: {
      correct: "False",
    },
  },

  {
    question: "Which comparison operator will return false",
    choices: {
      a: "console.log(1 == 1);",
      b: "console.log('1' == 1);",
      c: "console.log(1 === 1);",
      d: "console.log('1' === 1);",
    },
    answer: {
      correct: "console.log('1' === 1)",
    },
  },

  {
    question:
      "A callback function is a function which is passed into another function as an argument which is then invoked inside the outer function to complete some kind of routine or action.",
    choices: {
      a: "True",
      b: "False",
    },
    answer: {
      correct: "True",
    },
  },
];

var selQuestion = "";
var choiceA = "";
var choiceB = "";
var choiceC = "";
var choiceD = "";
var selAnswer = "";

// selAnswer = quizQuestions[0].answer.correct;
// console.log("A = " + selAnswer);
// console.log();

// for (i = 0; i < quizQuestions.length; i++) {
//   selQuestion = quizQuestions[i].question;
//   console.log("Q = " + selQuestion);
//   choiceA = quizQuestions[i].choices.a;
//   choiceB = quizQuestions[i].choices.b;
//   choiceC = quizQuestions[i].choices.c;
//   choiceD = quizQuestions[i].choices.d;

//   if (typeof choiceA != "undefined") console.log(choiceA);
//   if (typeof choiceB != "undefined") console.log(choiceB);
//   if (typeof choiceC != "undefined") console.log(choiceC);
//   if (typeof choiceD != "undefined") console.log(choiceD);

//   selAnswer = quizQuestions[i].answer.correct;
//   console.log("A = " + selAnswer);
//   console.log("***********************");
// }

function getQuestion(qNum) {
  selQuestion = quizQuestions[qNum].question;
  return selQuestion;
}

function getChoiceA(qNum) {
  choiceA = quizQuestions[qNum].choices.a;
  return choiceA;
}

function getChoiceB(qNum) {
  choiceB = quizQuestions[qNum].choices.b;
  return choiceB;
}

function getChoiceC(qNum) {
  choiceC = quizQuestions[qNum].choices.c;
  return choiceC;
}

function getChoiceD(qNum) {
  choiceD = quizQuestions[qNum].choices.d;
  return choiceD;
}

function getAnswer(qNum) {
  correctAnswer = quizQuestions[qNum].answer.correct;
  return correctAnswer;
}
