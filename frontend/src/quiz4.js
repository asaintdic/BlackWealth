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
        this.correct_choice = Object.keys(quizAttributes.correct_choice)[0];
        this.topic_id = quizAttributes.topic_id;
        this.quizAdapter = new QuizAdapter;
        Quiz.all.push(this)
        
    } 
    
    
    
    
    
    renderQuiz = () => {
        
          return   ` <div class="container">
                    <div id="game" class="justify-center flex-column">
                        <h2 id="question">${this.question}</h2>
                    <div class="choice-container">
                        <p class="choice-prefix">A</p>
                        <p class="choice-text" data-number="a">${this.choices}</p>
                    </div>
                    // <div class="choice-container">
                    //     <p class="choice-prefix">B</p>
                    //     <p class="choice-text" data-number="b">${this.choiceB}</p>
                    // </div>
                    // <div class="choice-container">
                    //     <p class="choice-prefix">C</p>
                    //     <p class="choice-text" data-number="c">${this.choiceC}</p>
                    // </div>
                    // <div class="choice-container">
                    //     <p class="choice-prefix">D</p>
                    //     <p class="choice-text" data-number="d">${this.choiceD}</p>
                    // </div>
                    <div class="choice-container" >
                        <p class="choice-prefix">D</p>
                        <p class="choice-text" data-id="${this.correct_choice}">${this.correct_choice}</p>
                    </div>
                </div>
                </div>`;
        
               
    }       
    
    
    pickAnswer = () => {
        const score = 0
        const points = 10;
        const question = document.getElementById("question");
        const choices = Array.from(document.getElementsByClassName("choice-text"));
        
       
       
        choices.forEach(choice => {
            choice.addEventListener('click', e => {
                const selectedChoice = e.target;
                const selectedAnswer = selectedChoice.dataset['number']
                const correctAnswer = choice.dataset['id']
                
            
            const colorShow = 
            selectedAnswer == correctAnswer ? 'correct' : 'incorrect';
             
            selectedChoice.parentElement.classList.add(colorShow)
            
            if (colorShow === 'correct') {
                incrementScore(points)
            }
            })
        })
    }
    incrementScore = (num) => {
        const score = 0
        const scoreShow = document.getElementById('score')
        score += num;
        scoreShow.innerText = score
       
    }
    
  
}
Quiz.all = []