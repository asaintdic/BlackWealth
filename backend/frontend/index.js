// events: the page loads, user sees the first page(intro), pagination/button to section 1, then take quiz buton at bottom, click answers
// const readInfo = "http://localhost:3000/topics"
// const quizzes = "http://localhost:3000/quizzes"
// //  
// document.addEventListener('DomContentLoaded', fetchData())

// function fetchData() {
//     fetchInfo()
//     fetchQuizzes()
// }
const quizURL = "http://localhost:3000/quizzes/1"
function fetchQuiz() {
    fetch(quizURL)
    .then(res => res.json())
    .then(quiz => renderQuiz(quiz))
    .catch(error => document.write("Request Failed, please try again", error))
}

//  function renderQuiz(q) {
//      const id = document.getElementById("quizzes") 
//      Object.data(q.).forEach(qz => {               
//          const p = document.createElement('p)')     
//          p.innerHTML = qz[2]  
//          id.appendChild(p)
//      })

//  }

