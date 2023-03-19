var quizInform = [
  {
    question: "Commonly used data types DO NOT include",
    a: "strings",
    b: "booleans",
    c: "alerts",
    d: "numbers",
    correct: "c",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    a: "quotes",
    b: "curly brackets",
    c: "parentheses",
    d: "square brackets",
    correct: "c",
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    a: "numbers and strings",
    b: "other arrays",
    c: "booleans",
    d: "all of the above",
    correct: "d",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    a: "commas",
    b: "curly brackets",
    c: "quotes",
    d: "parentheses",
    correct: "c",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: "JavaScript",
    b: "terminal / bash",
    c: "for loops",
    d: "console.log",
    correct: "d",
  },
];
var quiz = document.getElementById("quiz");
var answerEls = document.querySelectorAll(".answer");
var questionEl = document.getElementById("question");
var option_a = document.getElementById("option_a");
var option_b = document.getElementById("option_b");
var option_c = document.getElementById("option_c");
var option_d = document.getElementById("option_d");
var submitBtn = document.getElementById("submit");
var initialEL = document.getElementById("initials");

window.notDone = true;

let currentQuiz = 0;
let score = 0;
displayQuiz();
function displayQuiz() {
  deselectAnswers();
  const currentQuizData = quizInform[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  option_a.innerText = currentQuizData.a;
  option_b.innerText = currentQuizData.b;
  option_c.innerText = currentQuizData.c;
  option_d.innerText = currentQuizData.d;
}
function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}
function selectedAnswer() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function SaveInitials() {
  var initial = document.querySelector(".initial").value;
  console.log(initial);

  // load from localStorage
  var previousEntries = localStorage.getItem("quiz");
  // check if exists after loading from localStorage
  if (previousEntries) {
    previousEntries = JSON.parse(previousEntries);
  } else {
    previousEntries = [];
  }
  var newEntry = {
    initial: initial,
    score: score * 5,
  };
  // Update the entries for localStorage
  previousEntries.push(newEntry);
  let conformedIntoString = JSON.stringify(previousEntries);
  localStorage.setItem("quiz", conformedIntoString);

  console.log(newEntry);

  // Go to high scores
  window.location.href = "./highscores.html";
}
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var answer = selectedAnswer();
  if (answer) {
    if (answer === quizInform[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizInform.length) {
      displayQuiz();
    } else {
      window.notDone = false;
      quiz.innerHTML = `
           <h2>Your final score is ${score * 5} </h2>
           <p> Save your score <p>
           <input class="initial" type="text" />
           <button id="save-btn" onclick="SaveInitials()">Save</button> 
           `;
    }
  }
});
// Timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("timer");

var secondsLeft = 45;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Timer: " + secondsLeft;

    if (secondsLeft === 0 && window.notDone) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";
  quiz.innerHTML = `
  <h2>Your final score is ${score * 5} </h2>
  <button onclick="location.reload()">Reload</button>
  `;
}
setTime();

//local storage
