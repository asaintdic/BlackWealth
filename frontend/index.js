const topics = new TopicAdapter
const quizzes = new QuizAdapter

window.addEventListener('load', () => {
    
    
            const button = document.getElementById('generational-wealth')
            const quizButton = document.getElementById('quiz-button')
            const tp    = document.getElementsByClassName('topic-wrapper')
            const submit = document.getElementById('submit')
            quizButton.style.visibility = "hidden"
            submit.style.visibility = "hidden";
        button.addEventListener('click', (e) => {
            topics.fetchTopics(e);
            button.style.display = "none";
            submit.style.visibility = "hidden";
            quizButton.style.visibility = "visible";
        quizButton.addEventListener('click', (e) => {
            submit.style.visibility = "visible"
            quizButton.style.visibility = "hidden"

            
            document.getElementById('topics').style.display = "none";
          
            quizzes.fetchQuizzes(e)

        
    // submit.addEventListener('click', Quiz.showResults)        
    
        }) 
    })
       
})