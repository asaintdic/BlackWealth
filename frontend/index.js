const topics = new TopicAdapter
const quizzes = new QuizAdapter

window.addEventListener('load', () => {
    
    
            const readMore = document.getElementById('generational-wealth')
            const quizButton = document.getElementById('quiz-button')
            const sectionQuizB = document.getElementById('section-quiz-button')
            const tp    = document.getElementsByClassName('topic-wrapper')
            const submit = document.getElementById('submit')
            const game = document.getElementById('game')
            const name = document.getElementById('enter-name')
            quizButton.style.visibility = "hidden"
            submit.style.visibility = "hidden"
            name.style.visibility ="hidden";
            // game.style.display = 'none'
     readMore.addEventListener('click', (e) => {
        // game.style.display = 'none'
            topics.fetchTopics(e);
            readMore.style.display = "none";
            submit.style.visibility = "hidden";
            quizButton.style.visibility = "visible";
   
     quizButton.addEventListener('click', (e) => {
            // game.style.display = 'block'
            name.style.visibility = "visible"
            submit.style.visibility = "visible"
            quizButton.style.visibility = "hidden"


            
            document.getElementById('topics').style.display = "none";
          
            quizzes.fetchQuizzes(e)

    // submit.addEventListener('click', quizzes.submitQuizResults()) 
        //    preventDefault(e)
    
        }) 
    })
       
})