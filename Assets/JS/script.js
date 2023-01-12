var currentQuestion = 0;
var score = 10;
var highScores;
var playerInitialsAll = []


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

        correct: 'False'
    },
];


let countdown = 60;

let timer = setInterval(function () {
    countdown--;
    if (!document.getElementById("timer")) {
        clearInterval(timer);
        return;
    }

    document.getElementById("timer").innerHTML = countdown;
    if (countdown === 0) {
        clearInterval(timer);
    }
}, 1000);

console.log("highscores in localstorage", localStorage.getItem("highscores"));

if (!localStorage.getItem("highscores")) {
    localStorage.setItem("highscores", JSON.stringify([]));
    console.log('local storage after setting initial hs: ', localStorage.getItem("highscores"))
}

// if (!localStorage.getItem("playerInitialsAll")) {
//     localStorage.setItem("playerInitialsAll", JSON.stringify([]));
//     console.log('local storage after setting initial hs: ', localStorage.getItem("playerInitialsAll"))
// }

var homepage = document.querySelector(".rules");
var startbtn = document.getElementById("startQuiz");
var highScoreSection = document.getElementById('highscore');

startbtn.onclick = function () {
    document.getElementById("rules").style.display = "none"
    document.getElementById("questions").style.display = "block";
    startQuiz();
}

let playerInitials;

function renderHighScoreSection() {
    const questionSection = document.getElementById('questions');
    questionSection.innerHTML = '';

    const inputHeader = document.createElement('h3');
    inputHeader.innerHTML = 'Initials';
    highScoreSection.appendChild(inputHeader);
    const input = document.createElement('input');
    input.addEventListener('keyup', (event) => {
        playerInitials = event.target.value;
    })

    input.id = 'initals_input';
    highScoreSection.appendChild(input);

    const submitBtn = document.createElement('button');
    submitBtn.innerHTML = 'Submit'
    submitBtn.style.marginTop = '20px';
    // submitBtn.style.marginLeft = '50px';


    submitBtn.addEventListener('click', (event) => {
        console.log(input.value)
        console.log(typeof input.value)
        playerInitials = input.value
        playerInitialsAll = JSON.parse(localStorage.getItem('highscores'))




        console.log(playerInitialsAll)
        let newScore = {
            score: score, initials: playerInitials
        }
        playerInitialsAll.push(newScore)

        localStorage.setItem('highscores', JSON.stringify(playerInitialsAll));
        highScoreSection.innerHTML = '';

        console.log('initials when submitting', playerInitials)

        const highScoreResults = document.createElement('div');
        var results = JSON.parse(localStorage.getItem('highscores'))
        console.log(results[0])

        for (let i = 0; i < results.length; i++) {
            var initialsHeader = document.createElement('h3');
            initialsHeader.innerHTML = results[i].initials
            highScoreResults.appendChild(initialsHeader);

            var scoreNumber = document.createElement('h3');
            scoreNumber.innerHTML = results[i].score;
            highScoreResults.appendChild(scoreNumber);

        }

        // const scoreResults = document.createElement('div');
        // scoreResults.innerHTML = localStorage.getItem('highscores');
        // highScoreResults.appendChild(scoreResults)
        highScoreSection.appendChild(highScoreResults);
    });

    highScoreSection.appendChild(submitBtn)

};

var questionTitle = document.getElementById("question_title");
var choicesDiv = document.getElementById('choices')



function renderChoices(q) {
    for (let i = 0; i < q.choices.length; i++) {
        const btn = document.createElement('button');
        btn.innerHTML = q.choices[i];
        btn.className = 'btn';

        btn.addEventListener('click', function (event) {
            if (currentQuestion + 1 < questions.length) {
                if (event.target.innerHTML === q.correct) {
                    currentQuestion = currentQuestion + 1;
                    choicesDiv.innerHTML = '';
                    questionTitle.innerHTML = questions[currentQuestion].question;
                    renderChoices(questions[currentQuestion]);
                    score += 10;
                } else {
                    currentQuestion = currentQuestion + 1;
                    choicesDiv.innerHTML = '';
                    questionTitle.innerHTML = questions[currentQuestion].question;
                    renderChoices(questions[currentQuestion]);
                    countdown -= 10;
                    if (score > 10) {
                        score -= 10;
                    }
                }
            } else {
                // highScores = JSON.parse(localStorage.getItem("highscores"));
                // highScores.push(score);
                // localStorage.setItem("highscores", JSON.stringify(highScores));
                renderHighScoreSection();
            }
        })
        choicesDiv.appendChild(btn);
    }
}

function startQuiz() {
    questionTitle.innerHTML = questions[0].question;
    renderChoices(questions[currentQuestion]);
}





// var currentQuestion = 0;
// var score = 0;
// var highScores;
// var playerInitialsAll = []

// var questions = [
//     {
//         question: 'Which one of these is a boolean?',
//         choices: ['String', 'True', 'Number', 'Undefined'],
//         correct: 'True'
//     },
//     {
//         question: 'What symbole is used to create a class element in CSS?',

//         choices: ['@', '*', '#', '.'],

//         correct: '.'
//     },
//     {
//         question: 'What does JS stand for?',

//         choices: ['Juicestand', 'Javascript', 'Javastring', 'Justscript'],

//         correct: 'Javascript'
//     },
//     {
//         question: 'Javascript is the same as Java?',

//         choices: ['False', 'True'],

//         correct: 'False'
//     },
// ];


// let countdown = 60;

// let timer = setInterval(function () {
//     countdown--;
//     if (!document.getElementById("timer")) {
//         clearInterval(timer);
//         return;
//     }

//     document.getElementById("timer").innerHTML = countdown;
//     if (countdown === 0) {
//         clearInterval(timer);
//     }
// }, 1000);

// console.log("highscores in localstorage", localStorage.getItem("highscores"));

// if (!localStorage.getItem("highscores")) {
//     localStorage.setItem("highscores", JSON.stringify([]));
//     console.log('local storage after setting initial hs: ', localStorage.getItem("highscores"))
// }

// if (!localStorage.getItem("playerInitialsAll")) {
//     localStorage.setItem("playerInitialsAll", JSON.stringify([]));
//     console.log('local storage after setting initial hs: ', localStorage.getItem("playerInitialsAll"))
// }

// var homepage = document.querySelector(".rules");
// var startbtn = document.getElementById("startQuiz");
// var highScoreSection = document.getElementById('highscore');

// startbtn.onclick = function () {
//     document.getElementById("rules").style.display = "none"
//     document.getElementById("questions").style.display = "block";
//     startQuiz();
// }

// let playerInitials;

// function renderHighScoreSection() {
//     const questionSection = document.getElementById('questions');
//     questionSection.innerHTML = '';

//     const inputHeader = document.createElement('h3');
//     inputHeader.innerHTML = 'Initials';
//     highScoreSection.appendChild(inputHeader);
//     const input = document.createElement('input');
//     input.addEventListener('keyup', (event) => {
//         playerInitials = event.target.value;
//     })

//     input.id = 'initals_input';
//     highScoreSection.appendChild(input);

//     const submitBtn = document.createElement('button');
//     submitBtn.innerHTML = 'Submit'
//     submitBtn.style.marginTop = '20px';
//     submitBtn.style.marginLeft = '50px';


//     submitBtn.addEventListener('click', (event) => {
//         console.log(input.value)
//         console.log(typeof input.value)
//         playerInitials = input.value
//         playerInitialsAll = JSON.parse(localStorage.getItem('playerInitialsAll'))


//         console.log(playerInitialsAll)
//         playerInitialsAll.push(playerInitials)

//         localStorage.setItem('playerInitialsAll', JSON.stringify(playerInitialsAll));
//         highScoreSection.innerHTML = '';

//         console.log('initials when submitting', playerInitials)

//         const highScoreResults = document.createElement('div');
//         const initialsHeader = document.createElement('h3');
//         initialsHeader.innerHTML = localStorage.getItem('playerInitialsAll');
//         highScoreResults.appendChild(initialsHeader);

//         const scoreResults = document.createElement('div');
//         scoreResults.innerHTML = localStorage.getItem('highscores');
//         highScoreResults.appendChild(scoreResults)
//         highScoreSection.appendChild(highScoreResults);
//     });

//     highScoreSection.appendChild(submitBtn)

// };

// var questionTitle = document.getElementById("question_title");
// var choicesDiv = document.getElementById('choices')



// function renderChoices(q) {
//     for (let i = 0; i < q.choices.length; i++) {
//         const btn = document.createElement('button');
//         btn.innerHTML = q.choices[i];
//         btn.className = 'btn';

//         btn.addEventListener('click', function (event) {
//             if (currentQuestion + 1 < questions.length) {
//                 if (event.target.innerHTML === q.correct) {
//                     currentQuestion = currentQuestion + 1;
//                     choicesDiv.innerHTML = '';
//                     questionTitle.innerHTML = questions[currentQuestion].question;
//                     renderChoices(questions[currentQuestion]);
//                     score += 10;
//                 } else {
//                     currentQuestion = currentQuestion + 1;
//                     choicesDiv.innerHTML = '';
//                     questionTitle.innerHTML = questions[currentQuestion].question;
//                     renderChoices(questions[currentQuestion]);
//                     countdown -= 10;
//                     if (score > 0) {
//                         score -= 10;
//                     }
//                 }
//             } else {
//                 highScores = JSON.parse(localStorage.getItem("highscores"));
//                 highScores.push(score);
//                 localStorage.setItem("highscores", JSON.stringify(highScores));
//                 renderHighScoreSection();
//             }
//         })
//         choicesDiv.appendChild(btn);
//     }
// }

// function startQuiz() {
//     questionTitle.innerHTML = questions[0].question;
//     renderChoices(questions[currentQuestion]);
// }


