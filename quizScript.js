var quizQuestions = [
  {
    question:
      "__________ was the creator of JavaScript which was originally name Livescript.",
    choices: {
      a: "Bill Gates",
      b: "Marc Andreessen",
      c: "Brendan Eich",
      d: "Ray Tomlinson",
    },
    answer: "c",
  },

  {
    question: "In Javascript, objects are __________ -based.",
    choices: {
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
    choices: {
      a: "True",
      b: "False",
    },
    answer: "b",
  },

  {
    question: "Javascript is __________ typed language.",
    choices: {
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
    choices: {
      a: "True",
      b: "False",
    },
    answer: "a",
  },

  {
    question: "Unlike Java, Javascript has defined data types.",
    choices: {
      a: "True",
      b: "False",
    },
    answer: "b",
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
    answer: "b",
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
    answer: "b",
  },

  {
    question:
      "Which can be used to dynamically change the behavior, display and interactions of a page.",
    choices: {
      a: "HTML",
      b: "JavaScript",
      c: "CSS",
    },
    answer: "c",
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
    answer: "b",
  },

  {
    question:
      "Which can be used to dynamically change the behavior, display and interactions of a page.",
    choices: {
      a: "HTML",
      b: "JavaScript",
      c: "CSS",
    },
    answer: "c",
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
    answer: "a",
  },

  {
    question:
      "When JavaScript reaches a return statement, the function will not stop executing.",
    choices: {
      a: "True",
      b: "False",
    },
    answer: "b",
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
    answer: "d",
  },

  {
    question:
      "Parameters are used when defining a function, they are the names created in the function definition.",
    choices: {
      a: "True",
      b: "False",
    },
    answer: "a",
  },

  {
    question:
      "Arguments are the values the function receives from each parameter when the function is executed (invoked).",
    choices: {
      a: "True",
      b: "False",
    },
    answer: "a",
  },

  {
    question: "An anonymous function uses a variable for its name.",
    choices: {
      a: "True",
      b: "False",
    },
    answer: "b",
  },

  {
    question: "Which comparison operator will return false",
    choices: {
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
    choices: {
      a: "True",
      b: "False",
    },
    answer: "a",
  },
];
var selQuestion = "";
var choiceA = "";
var choiceB = "";
var choiceC = "";
var choiceD = "";
var selAnswer = "";

for (i = 0; i < quizQuestions.length; i++) {
  selQuestion = quizQuestions[i].question;
  console.log("Q = " + selQuestion);
  choiceA = quizQuestions[i].choices.a;
  choiceB = quizQuestions[i].choices.b;
  choiceC = quizQuestions[i].choices.c;
  choiceD = quizQuestions[i].choices.d;

  if (typeof choiceA != "undefined") console.log(choiceA);
  if (typeof choiceB != "undefined") console.log(choiceB);
  if (typeof choiceC != "undefined") console.log(choiceC);
  if (typeof choiceD != "undefined") console.log(choiceD);

  selAnswer = quizQuestions[i].answer;
  console.log("A = " + selAnswer);
  console.log("***********************");
}
