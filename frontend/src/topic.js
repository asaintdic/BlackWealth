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
        
        return `
        <div data-id=${this.id}>
            <article>
            <h2> ${this.name}<h2>
            <h3>${this.contributor}</h3>
            <p>${this.body}</p>
            <h6>${this.url}<h6>
        </div>`
   }  


//    renderArticle(){  
//     const article= `<article>
//                     <h2> ${this.name}<h2>
//                     <p>${this.body}</p>
//                     <h6>${this.url}<h6>
//                     </article>`

//     document.querySelector('#topics').innerHTML += article
    
//     }    
}

Topic.all = []
