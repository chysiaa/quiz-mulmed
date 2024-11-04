// Slider functionality
var slider = document.getElementById("myRange");
var sliderValue = document.getElementById("sliderValue");

slider.oninput = function() {
    sliderValue.textContent = this.value;
    var percentage = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(to right, #2aaa8a ${percentage}%, #ddd ${percentage}%)`;
}

// Button functionality
const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const startquizBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox= document.querySelector('.quiz-box');
const nextBtn = document.querySelector('.next-btn');
const optionList = document.querySelector('.option-list');
const modalScoreboard = document.getElementById("scoreboard");
const finalScore = document.getElementById("finalScore");
const totalQuestionsText = document.getElementById("totalQuestions");

startBtn.onclick = () => { 
    popupInfo.classList.add('active');
    main.classList.add('active');
}
exitBtn.onclick = () => { 
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

let totalQuestions = 5;
startquizBtn.onclick = () => { 
    totalQuestions = parseInt(slider.value);
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
    headerScore();
};

let questionsCount = 0;
let questionNumb = 1;
let userScore = 0;

nextBtn.onclick = () => { 
    if (questionsCount < totalQuestions - 1) {
        questionsCount++;
        showQuestions(questionsCount);

        questionNumb++;
        questionCounter(questionNumb);
        
        nextBtn.classList.remove('active');
    } else {
        // Tampilkan modal scoreboard saat kuis selesai
        showScoreboard();
    }
}

function showQuestions(index) {
    const questionsText = document.querySelector('.question-text');
    const questionMediaContainer = document.querySelector('.question-media');
    questionMediaContainer.innerHTML = "";

    if (index < questions.length) {
        questionsText.textContent = `${questions[index].numb}. ${questions[index].question}`;
        
        if (questions[index].mediaType === "image") {
            questionMediaContainer.innerHTML = `<img src="${questions[index].mediaSrc}" alt="question-image" class="question-media-content">`;
        } else if (questions[index].mediaType === "video") {
            questionMediaContainer.innerHTML = `<video controls class="question-media-content" autoplay><source src="${questions[index].mediaSrc}" type="video/mp4"></video>`;
        } else if (questions[index].mediaType === "gif") {
            questionMediaContainer.innerHTML = `<img src="${questions[index].mediaSrc}" alt="question-gif" class="question-media-content">`;
        }

        let optionTags = '';
        for (let i = 0; i < questions[index].options.length; i++) {
            optionTags += `<div class="option"><span>${questions[index].options[i]}</span></div>`;
        }
        optionList.innerHTML = optionTags;

        const option = document.querySelectorAll('.option');
        for (let i = 0; i < option.length; i++) {
            option[i].setAttribute('onclick', 'optionSelected(this)');
        }
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionsCount].answer;
    let allOptions = optionList.children.length;
    
    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    } else {
        answer.classList.add('incorrect');
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct'); 
            }   
        }
    }

    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }
    nextBtn.classList.add('active');
}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${totalQuestions} Questions`;
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / ${totalQuestions}`;
}

// Fungsi untuk menampilkan modal scoreboard
function showScoreboard() {
    document.getElementById('scoreboard').style.display = 'flex';
    document.getElementById('finalScore').textContent = userScore;
    document.getElementById('totalQuestions').textContent = totalQuestions;
}

function restartQuiz() {
    location.reload(); // Reloads the page to restart the quiz
}
