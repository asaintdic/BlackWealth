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
    // submitQuizResults(){
    //     let formData = {
    //         name: '',
    //         score: ''
    //     };
        
        
    //         fetch('http://localhost:3000/quizzes',  {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json;charset=utf-8',
    //                 "Accept": "application/json"
                  
    //             },
    //             body: JSON.stringify(formData),
    //         })
    //         .then(res => res.json())
    //         .then(formData => {
    //             document.write("Hey" + formData[name] + "your score is" + formData[score])
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         });

    // }
}