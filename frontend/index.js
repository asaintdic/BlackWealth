const topics = new TopicAdapter
let quizzes = new QuizAdapter

window.addEventListener('load', () => {
    fetchItems()
})


function fetchItems(){

topics.fetchTopics()
quizzes.fetchQuizzes()
}

//rendering sections and quizzes on page

//  <div id="quiz"></div>
// <button id="submit">Submit Quiz</button>
// <div id="results"></div> 

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
    

// }