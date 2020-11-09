class Quiz{
    constructor(quiz, quizAttributes) {
        this.id = quiz.id;
        this.question = quizAttributes.question;
        this.choices = quizAttributes.choices;
        this.choiceA = quizAttributes.choices['a']
        this.choiceB = quizAttributes.choices['b']
        this.choiceC = quizAttributes.choices['c']
        this.choiceD = quizAttributes.choices['d']
        this.correct_choice = quizAttributes.correct_choice;
        this.correct_choiceText = quizAttributes.correct_choice;
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
               console.log(`${this.correct_choice}`)
                
                
            })
        })
    }
        
   
    
    //     const question = document.getElementById("question");
    //     const choices = Array.from(document.getElementsByClassName("choice-text"));

    //     let currentQuestion = {};
    //     let acceptingAnswers = false;
    //     let score = 0;
    //     let questionCounter = 0;
    //     let availableQuesions = [];

    //     const CORRECT_BONUS = 10;
    //     const MAX_QUESTIONS = 3;

    //     questionCounter = 0;
    //     score = 0;
    //     availableQuesions = [...Quiz.all];// ${this.questions}
        
    // //     getNewQuestion();
    // //   }    
    // //   getNewQuestion = () => {
    //         if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //           return window.location.assign("/end.html");
    //         }
    //         questionCounter++;
    //         const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    //         currentQuestion = availableQuesions[questionIndex];
    //         question.innerText = currentQuestion.question
            
    //     choices.forEach(choice => {
    //         const number = choice.dataset["number"];
    //         choice.innerText = `${this.choices[number]}`
    //       });
    // //    }
    //     choices.forEach(choice => {
    //         choice.addEventListener("click", e => {
    //           if (!acceptingAnswers) return;
          
    //           acceptingAnswers = false;
    //           const selectedChoice = e.target;
    //           const selectedAnswer = selectedChoice.dataset["number"];
    //          console.log(selectedChoice)
    //           const classToApply =
    //             selectedAnswer == currentQuestion.correct_choice ? "correct" : "incorrect";
          
    //           selectedChoice.parentElement.classList.add(classToApply);
          
    //         //   setTimeout(() => {
    //         //     selectedChoice.parentElement.classList.remove(classToApply);
    //         //     // getNewQuestion();
    //         //   }, 1000);
    //         });
    //     });
    
   
}
Quiz.all = []