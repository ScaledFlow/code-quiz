var body = document.body;

var quizNote =
  "Try to answer the following code related questions withing the time limit. Keep in mind that incorect answers will penalize your scoretime by ten seonds!";

var h1El = document.createElement("h1");
var h4El = document.createElement("h4");
var buttonEl = document.createElement("button");

var thebutton = "pressed";

init();
//removeIt();
buttonListen();

function init() {
  h1El.textContent = "Coding Quiz Challenge";
  body.appendChild(h1El);

  h4El.textContent = quizNote;
  body.appendChild(h4El);

  buttonEl.textContent = "Start Quiz";
  buttonEl.setAttribute("class", "btn");
  body.appendChild(buttonEl);
}

function removeIt() {
  if (thebutton === "pressed") {
    body.removeChild(h1El);
    body.removeChild(h4El);
    body.removeChild(buttonEl);
    console.log("remove it");
  }
}

function buttonListen() {
  document.getElementById("buttonEl").addEventListener("click", removeIT);
  console.log("button event");
}
