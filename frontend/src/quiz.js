class Quiz{
    constructor(quiz, quizAttributes) {
        this.id = quiz.id;
        this.question = quizAttributes.question;
        this.choices = quizAttributes.choices;
        this.correct_choice = quizAttributes.correct_choice;
        this.topic_id = quizAttributes.topic_id;
        this.quizAdapter = new QuizAdapter;
    }
    allChoices()  {
        for(letter in this.choices){
            return
            const choiceA = `${letter[0]}`
            const choiceB = `${letter[1]}`
            const choiceC = `${letter[2]}`
            const choiceD = `${letter[3]}`
        }
    }


    renderQuiz = () => {
        this.allChoices()
        const quizContainer = document.getElementById('quiz')
        const resultsContainer = document.getElementById('results')
        const submitButton = document.getElementById('submit')
        const question = document.createElement('h3')
        const choices = document.createElement('label')
        const p3 = document.createElement('p')
        const p4 = document.createElement('p')
        const p5 = document.createElement('p')
        
          question.innerHTML = `${this.question}`
          p3.innerHTML = choiceA


          quizContainer.appendChild(question)
          quizContainer.appendChild(p3)
    }           
}
Quiz.all = []