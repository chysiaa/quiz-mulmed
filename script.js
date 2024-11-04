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

//--Adjust quizbox height--
function adjustQuizBox() {
    const quizSection = document.querySelector('.quiz-section');
    const quizBox = document.querySelector('.quiz-box');

    const windowHeight = window.innerHeight;
    let topPadding = Math.max((windowHeight - quizBox.offsetHeight - 20) / 2 + 10, 30);
    if (windowHeight < 1080) {
        topPadding = Math.max((windowHeight - quizBox.offsetHeight - 20) / 2 + 200, 100);
    }
    if (quizBox.offsetTop + quizBox.offsetHeight > windowHeight) {
        const additionalPadding = (quizBox.offsetTop + quizBox.offsetHeight) - windowHeight;
        quizBox.style.marginTop = `${topPadding + additionalPadding}px`;
    } else {
        quizBox.style.marginTop = `${topPadding}px`;
    }
}

document.querySelector('.quiz-box').style.marginTop = '10px';

adjustQuizBox();

window.addEventListener('resize', adjustQuizBox);
//--End of Adjust quizbox height-

// Add an event listener to adjust on window resize
window.addEventListener('resize', adjustMargin);

function showQuestions(index) {
    const questionsText = document.querySelector('.question-text');
    const questionMediaContainer = document.querySelector('.question-media');
    questionMediaContainer.innerHTML = ""; // Clear previous media content

    // Check if the index is within the bounds of the questions array
    if (index < questions.length) {
        // Display the question text
        questionsText.textContent = `${questions[index].numb}. ${questions[index].question}`;

        // Check if the current question has mediaType and mediaSrc defined
        const mediaType = questions[index].mediaType;
        const mediaSrc = questions[index].mediaSrc;

        if (mediaType && mediaSrc) {
            // Check the media type and display the corresponding media
            if (mediaType === "image") {
                questionMediaContainer.innerHTML = `<img src="${mediaSrc}" alt="question-image" class="question-media-content" onerror="this.onerror=null; this.src='default-image.png';">`;
            } else if (mediaType === "video") {
                questionMediaContainer.innerHTML = `<video controls class="question-media-content" autoplay onerror="this.style.display='none';"><source src="${mediaSrc}" type="video/mp4">Your browser does not support the video tag.</video>`;
            } else if (mediaType === "gif") {
                questionMediaContainer.innerHTML = `<img src="${mediaSrc}" alt="question-gif" class="question-media-content" onerror="this.onerror=null; this.src='default-gif.gif';">`;
            } else {
                console.warn('Unsupported media type');
            }
        } else {
            // Hide the media container if no media is defined for the question
            questionMediaContainer.style.display = 'none';
        }

        // Generate option tags
        let optionTags = '';
        for (let i = 0; i < questions[index].options.length; i++) {
            optionTags += `<div class="option"><span>${questions[index].options[i]}</span></div>`;
        }
        const optionList = document.querySelector('.option-list'); // Ensure this selector matches your HTML
        optionList.innerHTML = optionTags;

        // Attach click event to each option
        const option = document.querySelectorAll('.option');
        for (let i = 0; i < option.length; i++) {
            option[i].setAttribute('onclick', 'optionSelected(this)');
        }
    } else {
        console.error('Index is out of bounds for questions array');
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
    location.reload(); 
}

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const icon = document.getElementById('icon');

    // Function to toggle mute and unmute
    function toggleMute() {
        audio.muted = !audio.muted; // Toggle the muted state
        updateIcon(); // Update the icon based on the muted state
    }

    // Function to update the icon based on mute status
    function updateIcon() {
        if (audio.muted) {
            icon.classList.remove('fa-volume-up');
            icon.classList.add('fa-volume-mute');
        } else {
            icon.classList.remove('fa-volume-mute');
            icon.classList.add('fa-volume-up');
        }
    }

    // Event listener for icon click to toggle mute
    icon.addEventListener('click', toggleMute);
});