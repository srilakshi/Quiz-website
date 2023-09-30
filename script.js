const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const quizzSection = document.querySelector('.quizz-section');
const quizzBox = document.querySelector('.quizz-box');



startBtn.onclick = () => {
   popupInfo.classList.add('active');
   
}
exitBtn.onclick = () => {
   popupInfo.classList.remove('active');
   main.classList.remove('active');
   
}
continueBtn.onclick = () => {
   quizzSection.classList.add('active');
   popupInfo.classList.remove('active');
   main.classList.remove('active');
   quizzBox.classList.add('active');
   
   showQuestions(0);
}

let questionCount = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
   questionCount++;
   showQuestions(questionCount);

}


function showQuestions(index) {
   const questionText = document.querySelector('.Question-text');
   questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

}