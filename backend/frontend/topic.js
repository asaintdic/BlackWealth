class Topic{
    constructor(name, section, title, body, contributor, url) {
        this.name = name
        this.section = section 
        this.title = title
        this.body = body
        this.contributor = contributor
        this.url = url

    }
}

const topicUrl = "http://localhost:3000/topics"

document.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded'); 
});

function fetchTopic() {
    fetch(topicUrl)
    .then(res => res.json())
    .then(topics => renderTopics(topics))
}

function renderTopics(t) {
    const div = document.getElementById('wealth-article')
    
     //title
    const h1 = document.createElement('h1')
    //author
    const h4 = document.createElement('h4')
    //body
    const p = document.createElement('p')
    //url
    const url = document.createElement('url')
}


renderTopics()

// .for each
// const item = new Item