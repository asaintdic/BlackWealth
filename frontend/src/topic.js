class Topic{
    constructor(topic, topicAttributes) {
        this.id = topic.id;
        this.name = topicAttributes.name;
        this.section = topicAttributes.section; 
        this.title = topicAttributes.title;
        this.body = topicAttributes.body;
        this.contributor = topicAttributes.contributor;
        this.url = topicAttributes.url;
        this.topicAdapter = new TopicAdapter;
        this.quizAdapter = new QuizAdapter
        Topic.all.push(this)
        

    }


   renderTopic() {
        const topicsDiv = document.getElementsByClassName("topics-wrapper")
        const topicDiv  = document.getElementById('topics')
        // const quizButton = document.getElementById('quiz-button')
        
        return `
        <div data-id=${this.id}>
            <article>
            <h2>Section: ${this.section} </h2>
            <h3> ${this.name}<h3>
            <h4>${this.contributor}</h4>
            <p>${this.body}</p>
            <h6>${this.url}<h6>
            <button id='section-quiz-button'>Take Section: ${this.section} Quiz</button>
        </div>`
   }  


//    
}

Topic.all = []
