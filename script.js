let currentQuestionIndex = 0;
let questions = [];

async function loadQuestions() {
    const response = await fetch('../data/ssc-cgl.json');
    questions = await response.json();
    displayQuestion();
}

function displayQuestion() {
    let questionText = document.getElementById("question-text");
    let optionsContainer = document.getElementById("options-container");

    let question = questions[currentQuestionIndex];
    questionText.innerText = question.question;
    optionsContainer.innerHTML = "";

    for (let key in question.options) {
        let btn = document.createElement("button");
        btn.innerText = question.options[key];
        btn.onclick = () => selectAnswer(key);
        optionsContainer.appendChild(btn);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function selectAnswer(answer) {
    console.log(`Selected answer: ${answer}`);
}

function submitExam() {
    alert("Exam submitted!");
}

window.onload = loadQuestions;
