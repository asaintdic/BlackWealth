class QuizAdapter{

    fetchQuizzes(){
        fetch('http://localhost:3000/quizzes')
        .then(res => res.json())
        .then(quizzes => {
            quizzes.data.forEach(quiz => {
                let newQuiz = new Quiz(quiz, quiz.attributes)
                // document.getElementById('quiz').innerHTML += newQuiz.renderQuiz()
                newQuiz.renderQuiz()
              })
            } )
    }
}