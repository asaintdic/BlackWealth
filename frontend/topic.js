class Topic{
    constructor(id, name, section, title, body, contributor, url) {
        this.id = id
        this.name = name
        this.section = section 
        this.title = title
        this.body = body
        this.contributor = contributor
        this.url = url
        

    }
}

// renderTopic = () => {
function renderTopic() {
    const topicsDiv = document.getElementsByClassName("topics-wrapper")
    const topicDiv  = document.getElementById("section 1")
    const h2        = document.createElement('h2')
    const h5        = document.createElement('h5')
    const p         = document.createElement('p')
    const h6        = document.createElement('h6')

    topicDiv.style.display = 'block'
    
}

