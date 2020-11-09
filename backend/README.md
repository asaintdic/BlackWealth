# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


const quizc = document.getElementById('quiz')
const resultsc = document.getElementById('results')
const submit = document.getElementById('submit')

const sectionOne = document.getElementById('section 1')
const sectionTwo = document.getElementById('section 2')
const sectionThree = document.getElementById('section 3')

sectionOne.addEventListener('click', showSectionOne)
sectionTwo.addEventListener('click', showSectionTwo)
sectionThree.addEventListener('click', showSectionThree)



function  quiz(){}
function results(){}

function showSectionOne(){}
function showSectionTwo(){}
function showSectionThree(){}
function takeQuiz(){}


// events: the page loads, user sees the first page(intro), pagination/button to section 1, then take quiz buton at bottom, click answers
const quizURL = "http://localhost:3000/quizzes/1"

function fetchQuiz() {
    fetch(quizURL)
    .then(res => res.json())
    .then(quiz => console.log(quiz))
}

const allSections =
function renderSections


// 
// function fetchItems(){

// topics.fetchTopics()
// quizzes.fetchQuizzes()


// function showSection() {
// let section1 = document.getElementById('section-1')

// section1.addEventListener('click', renderTopic())
// }


//rendering sections and quizzes on page

<!-- //  <div id="quiz"></div>
// <button id="submit">Submit Quiz</button>
// <div id="results"></div>  -->

// const quizContainer = document.getElementById('quiz')
// const resultsContainer = document.getElementById('results')
// const submitButton = document.getElementById('submit')

// function readSection1(){}
// function takeQuiz(){}


// takeQuizButton.addEventListener('click', takeQuiz)

// readSection1Button.addEventListener('click', showSection1);



// function buildQuiz(){}
// function showResults(){}

// buildQuiz();

// submitButton.addEventListener('click', showResults)

// function buildQuiz(){
//     const output =[]

const topics = new TopicAdapter
const quizzes = new QuizAdapter

window.addEventListener('load', () => {
    
    
    const button = document.getElementById(`generational-wealth`)
    const quizButton = document.getElementById('quiz-button')
    const tp    = document.getElementById('topics')

    quizButton.style.visibility = "hidden"
    
    button.addEventListener('click', (e) => {
        
        topics.fetchTopics(e);
        button.style.display = "none";
        quizButton.style.visibility = "visible";
        
        quizButton.addEventListener('click', (e) => {
            quizButton.style.visibility = "hidden"
            document.getElementById('topics').style.display = "none";
                    // let topic = document.getElementById('topics');
                // if  (topic.style.display = "none") {
                //     topic.style.display = "block";
                // } else {
                //     topic.style.display = 'none';
                // }
                
            quizzes.fetchQuizzes(e)
        }) 
    })
       
})


    //     const question = document.getElementById("question");
    //     const choices = Array.from(document.getElementsByClassName("choice-text"));

    //     let currentQuestion = {};
    //     let acceptingAnswers = false;
    //     let score = 0;
    //     let questionCounter = 0;
    //     let availableQuesions = [];

    //     const CORRECT_BONUS = 10;
    //     const MAX_QUESTIONS = 3;

    //     questionCounter = 0;
    //     score = 0;
    //     availableQuesions = [...Quiz.all];// ${this.questions}
        
    // //     getNewQuestion();
    // //   }    
    // //   getNewQuestion = () => {
    //         if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //           return window.location.assign("/end.html");
    //         }
    //         questionCounter++;
    //         const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    //         currentQuestion = availableQuesions[questionIndex];
    //         question.innerText = currentQuestion.question
            
    //     choices.forEach(choice => {
    //         const number = choice.dataset["number"];
    //         choice.innerText = `${this.choices[number]}`
    //       });
    // //    }
    //     choices.forEach(choice => {
    //         choice.addEventListener("click", e => {
    //           if (!acceptingAnswers) return;
          
    //           acceptingAnswers = false;
    //           const selectedChoice = e.target;
    //           const selectedAnswer = selectedChoice.dataset["number"];
    //          console.log(selectedChoice)
    //           const classToApply =
    //             selectedAnswer == currentQuestion.correct_choice ? "correct" : "incorrect";
          
    //           selectedChoice.parentElement.classList.add(classToApply);
          
    //         //   setTimeout(() => {
    //         //     selectedChoice.parentElement.classList.remove(classToApply);
    //         //     // getNewQuestion();
    //         //   }, 1000);
    //         });
    //     });