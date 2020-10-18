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