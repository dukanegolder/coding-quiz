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

// let output = document.getElementById("output");
// output.innerHTML = questions[0].question;

var homepage = document.querySelector(".rules");
var startbtn = document.getElementById("startQuiz");

startbtn.onclick = function () {
    document.getElementById("rules").style.display = "none"
    document.getElementById("questions").style.display = "block";
}


