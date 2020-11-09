class QuizAdapter{

    fetchQuizzes(){
        fetch('http://localhost:3000/quizzes')
        .then(res => res.json())
        .then(quizzes => {
            quizzes.data.forEach(quiz => {
                let newQuiz = new Quiz(quiz, quiz.attributes)
                
                document.querySelector('#quiz').innerHTML += newQuiz.renderQuiz()
                newQuiz.pickAnswer()
              })
            } )
    }
    quizResults(){
        let formData = {
            name: '',
            score: ''
        };
        fetch('http://localhost:3000/quizzes', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              
            },
            body: JSON.stringify(formData)
        })

    }
}