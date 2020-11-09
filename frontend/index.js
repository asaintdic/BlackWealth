const topics = new TopicAdapter
const quizzes = new QuizAdapter

window.addEventListener('load', () => {
    
    
            const button = document.getElementById('generational-wealth')
            const quizButton = document.getElementById('quiz-button')
            const tp    = document.getElementsByClassName('topic-wrapper')
            const submit = document.getElementById('submit')
            // const game = document.getElementById('game')
            quizButton.style.visibility = "hidden"
            // check.style.visibility = "hidden"
    // game.style.display = "none";
    button.addEventListener('click', (e) => {
            // game.style.display = "none";   
            topics.fetchTopics(e);
            button.style.display = "none";
            // check.style.visibility = "hidden"
            quizButton.style.visibility = "visible";
        // tp.forEach(tpi => {
        //     tpi.style.display = "none"
        // })
    quizButton.addEventListener('click', (e) => {
            // game.style.display = "block"; 
            quizButton.style.visibility = "hidden"
            // check.style.visibility = "visible"
            document.getElementById('topics').style.display = "none";
                    // let topic = document.getElementById('topics');
                // if  (topic.style.display = "none") {
                //     topic.style.display = "block";
                // } else {
                //     topic.style.display = 'none';
                // }
                
            quizzes.fetchQuizzes(e)

        
    // submit.addEventListener('click', Quiz.showResults)        
    
        }) 
    })
       
})