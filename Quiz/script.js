const quizData = [
    {
        question: "The series Friends is set in which city?",
        a: "Los Angeles",
        b: "Miami",
        c: "New York",
        d: "Seattle",
        correct: "c",
    },
    {
        question: "What’s the name of the 1950s-themed diner where Monica worked as a waitress?",
        a: "Moondance Diner",
        b: "Marvin’s",
        c: "Marilyn & Audrey",
        d: "Twilight Galaxy",
        correct: "a",
    },
    {
        question: "What song is Phoebe best known for?",
        a: "Smelly Cat",
        b: "Smelly Dog",
        c: "Smelly Rabbit",
        d: "Smelly Worm",
        correct: "a",
    },
    {
        question: "What is Chandler’s middle name?",
        a: "Muriel",
        b: "Jason",
        c: "Kim",
        d: "Zachary",
        correct: "a",
    },
    {
        question: "Who was Chandler’s TV magazine always addressed to?",
        a: "Chanandler Bong",
        b: "Chanandler Bang",
        c: "Chanandler Bing",
        d: "Chanandler Beng",
        correct: "a",
    },
    {
        question: "Who sang the Friends theme?",
        a: "The Banksys",
        b: "The Rembrandts",
        c: "The Constables",
        d: "The Da Vinci Band",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})