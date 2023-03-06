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
        question: "The condition in an if / else statement is enclosed within ____.",
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
        question: "String values must be enclosed within ____ when being assigned to variables.",
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "parentheses",
        correct: "c",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "JavaScript",
        b: "terminal / bash",
        c: "for loops",
        d: "console.log",
        correct: "d",
    },
];
var quiz= document.getElementById('quiz')
var answerEls = document.querySelectorAll('.answer')
var questionEl = document.getElementById('question')
var option_a = document.getElementById('option_a')
var option_b = document.getElementById('option_b')
var option_c = document.getElementById('option_c')
var option_d = document.getElementById('option_d')
var submitBtn = document.getElementById('submit')
var initialEL = document.getElementById('initials')

let currentQuiz = 0
let score = 0
displayQuiz()
function displayQuiz() {
    deselectAnswers()
    const currentQuizData = quizInform[currentQuiz]
    questionEl.innerText = currentQuizData.question
    option_a.innerText = currentQuizData.a
    option_b.innerText = currentQuizData.b
    option_c.innerText = currentQuizData.c
    option_d.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function selectedAnswer() {
    let answer
    answerEls.forEach (answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', function() {
    var answer = selectedAnswer()
    if(answer) {
       if(answer === quizInform[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizInform.length) {
           displayQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Your final score is ${score*5} </h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
// Timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById('timer');

var secondsLeft = 15;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = 'Timer: '+ secondsLeft;

    if(secondsLeft === 0) {
           clearInterval(timerInterval);
           sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";
  quiz.innerHTML = `
  <h2>Your final score is ${score*5} </h2>
  <button onclick="location.reload()">Reload</button>
  `
}
setTime();


//local storage 
