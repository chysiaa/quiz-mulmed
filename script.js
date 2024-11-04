// --Slider functionality--
var slider = document.getElementById("myRange");
var sliderValue = document.getElementById("sliderValue");

slider.oninput = function() {
    sliderValue.innerHTML = this.value;
    var percentage = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(to right, #2aaa8a ${percentage}%, #ddd ${percentage}%)`;
}
// --End of slider functionality--

const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const startquizBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox= document.querySelector('.quiz-box');
const nextBtn = document.querySelector('.next-btn');
const optionList = document.querySelector('.option-list')

//--Button functionality--
startBtn.onclick = () => { 
    popupInfo.classList.add('active');
    main.classList.add('active');
}
exitBtn.onclick = () => { 
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

startquizBtn.onclick = () => { 
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
    headerScore();
}
//--End of Button functionality--

let questionsCount = 0;
let questionNumb = 1;
let userScore = 0;

nextBtn.onclick = () => { 
    if (questionsCount < questions.length - 1) {
        questionsCount++;
        showQuestions(questionsCount);

        questionNumb++;
        questionCounter(questionNumb);
        
        nextBtn.classList.remove('active');
    } else {
        console.log('No more questions');
    }
}

function showQuestions(index) {
    const questionsText = document.querySelector('.question-text');
    const questionImage = document.querySelector('.question-image');
    
    if (index < questions.length) {
        questionsText.textContent = `${questions[index].numb}. ${questions[index].question}`;
        questionImage.src = questions[index].image; 
        questionImage.alt = questions[index].answer;

        let optionTags = '';
        for (let i = 0; i < questions[index].options.length; i++) {
            optionTags += `<div class="option"><span>${questions[index].options[i]}</span></div>`;
        }
        optionList.innerHTML = optionTags; 

        const option = document.querySelectorAll('.option');
        for (let i = 0; i < option.length; i++) {
            option[i].setAttribute('onclick', 'optionSelected(this)');
        }
    } else {
        questionsCount = 0;
        showQuestions(questionsCount);
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionsCount].answer;
    let allOptions = optionList.children.length;
    
    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore +=1;
        headerScore();
    } else {
        answer.classList.add('incorrect');

        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct'); 
            }   
        }
    }
    //user selected validation
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }
    nextBtn.classList.add('active');
}

//--Question counter--
function questionCounter(index){
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions` ;
}
//--End of Question counter--

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

//--Adjust quizbox height--
function adjustQuizBox() {
    const quizSection = document.querySelector('.quiz-section');
    const quizBox = document.querySelector('.quiz-box');

    const windowHeight = window.innerHeight;
    let topPadding = Math.max((windowHeight - quizBox.offsetHeight) / 2 + 20, 30);
    if (windowHeight < 1080) {
        topPadding = Math.max((windowHeight - quizBox.offsetHeight) / 2 + 400, 100);
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
//--End of Adjust quizbox height--
