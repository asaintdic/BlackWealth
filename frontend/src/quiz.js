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
        this.topic_id = quizAttributes.topic_id;
        this.quizAdapter = new QuizAdapter;
        Quiz.all[this.id] = this
       
        
    } 
    

    // takeQuiz = () => {
    //     this.renderQuiz
    //     this.incrementScore
    //     this.pickAnswer

    // }
    
    
    renderQuiz = () => {
        
       
      return          ` 
      <div class="container">
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
   </div>`

  

    

    }


    incrementScore = (num) => {
        
        let score = 0
        let points = 10
        const scoreShow = document.getElementById('score')
        score += num;
        scoreShow.innerText = score
       
    }
   
   
   
   
   
    pickAnswer = (name, selectedAnswers, topicId) => {
        selectedAnswers = []
        const form = document.getElementById('form')
        const choices = Array.from(document.getElementsByClassName("choice-text"));
        name = document.getElementById('name').innerText
        topicId = this.topic_id

        choices.forEach(choice => {
            choice.addEventListener('click', e => {
                

                

                
                const selectedChoice = e.target;
                const selectedAnswer = selectedChoice.dataset['number']
                selectedAnswers.push(selectedAnswer)
                
                
                selectedChoice.style.color = "white"
                selectedChoice.parentElement.style.background = "blue"

        
            })
        })
        form.addEventListener('submit', e => {
          e.preventDefault()
             
            
            fetch('http://localhost:3000/quizzes',  {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        "Accept": "application/json"
                      
                    },
                    body: JSON.stringify({name: "Alain" , choices: selectedAnswers.join(), topic_id: topicId}),
                })
                
                .then(res => res.json())
                .then(quizResults => this.showResult(quizResults))
                .catch((error) => {
                    console.log(error)
                });
            return(this.showResult)
            
       
            
        
        }) 

    }  
    showResult(result){
        console.log(result)
    document.getElementById('quiz').style.display="none"
    let p = document.createElement('h2')
    p.innerText = "Hi" + result + "your score is"
    document.getElementById('enter-name').appendChild(p)

    }

  
}
Quiz.all = {}