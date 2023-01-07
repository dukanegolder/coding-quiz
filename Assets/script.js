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



var homepage = document.querySelector(".rules");
var startbtn = document.getElementById('#startbtn');


function startQuiz() {
    if (homepage.style.display === "none") {
        questions[0].style.display = "block";
    } else {
        questions[0].style.display = "none";
    }
}

startQuiz()

startBtn.onclick = startQuiz()