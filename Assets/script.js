var questions = [
    {
        question: 'Which one of these is a boolean?',
        choices: ['String', 'True', 'Number', 'Undefined'],
        correct: 'True'
    },
    {
        question: 'What symbole is used to create a class element in CSS?',
        choices: ['@', '*', '#', '.'],
        correct: '.'
    },
    {
        question: 'What does JS stand for?',
        choices: ['Juicestand', 'Javascript', 'Javastring', 'Justscript'],
        correct: 'Javascript'
    },
    {
        question: 'Javascript is the same as Java?',
        choices: ['False', 'True'],
        correct: 'true'
    },
]
let countdown = 60;

let timer = setInterval(function () {
    countdown--;
    document.getElementById("timer").innerHTML = countdown;
    if (countdown === 0) {
        clearInterval(timer);
    }
}, 1000);


var homepage = document.querySelector(".rules");
var startbtn = document.getElementById("startQuiz");

startbtn.onclick = function () {
    document.getElementById("rules").style.display = "none"
    document.getElementById("questions").style.display = "block";
}






