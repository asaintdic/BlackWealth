class Quiz{
    constructor(quiz, quizAttributes) {
        this.id = quiz.id;
        this.name = quizAttributes.name;
        this.score = quizAttributes.score;
        this.question = quizAttributes.question;
        this.choices = quizAttributes.choices;
        this.choiceA = quizAttributes.choices['a']
        this.choiceB = quizAttributes.choices['b']
        this.choiceC = quizAttributes.choices['c']
        this.choiceD = quizAttributes.choices['d']
        this.correct_choice = Object.values(quizAttributes.correct_choice)[0];
        debugger
        this.topic_id = quizAttributes.topic_id;
        
        this.quizAdapter = new QuizAdapter;
        Quiz.all.push(this)
    } 
    

    
    
    
    renderQuiz = () => {
        
        return ` <div class="container">
                    <div id="game" class="justify-center flex-column">
                        <h2 id="question">${this.question}</h2>
                    <div class="choice-container">
                        <p class="choice-prefix">A</p>
                        <p class="choice-text" data-number="a">${this.choiceA}</p>
                    </div>
                    <div class="choice-container">
                        <p class="choice-prefix">B</p>
                        <p class="choice-text" data-number="b">${this.choiceB}</p>
                    </div>
                    <div class="choice-container">
                        <p class="choice-prefix">C</p>
                        <p class="choice-text" data-number="c">${this.choiceC}</p>
                    </div>
                    <div class="choice-container">
                        <p class="choice-prefix">D</p>
                        <p class="choice-text" data-number="d">${this.choiceD}</p>
                    </div>
                    <div class="choice-container">
                       <div id='answer' style="display: none;">
                        <p class="choice-prefix">D</p>
                        <p class="choice-text" data-number="correct">${this.correct_choice}</p>
                       </div>
                    </div>
                </div>
                </div>`
    }
    pickAnswer = () => {
        const question = document.getElementById("question");
        const choices = Array.from(document.getElementsByClassName("choice-text"));

        choices.forEach(choice => {
            choice.addEventListener('click', e => {
                const selectedChoice = e.target;
                const selectedAnswer = selectedChoice.innerHTML
               console.log(selectedAnswer)
                
                
            })
        })
    }
  
}
Quiz.all = []