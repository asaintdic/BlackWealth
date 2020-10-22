class Topic{
    constructor(id, name, section, title, body, contributor, url) {
        this.id = id;
        this.name = name;
        this.section = section; 
        this.title = title;
        this.body = body;
        this.contributor = contributor;
        this.url = url;
        this.topicAdapter = new TopicAdapter;
        

    }


   renderTopic() {
    const topicsDiv = document.getElementsByClassName("topics-wrapper")
    const topicDiv  = document.getElementById("Section 1")
    const h2        = document.createElement('h2')
    const h5        = document.createElement('h5')
    const p         = document.createElement('p')
    const h6        = document.createElement('h6')

    topicDiv.style.display = 'block'
    
   h2.innerHTML = `${this.name}`
   h5.innerHTML = `${this.contributor}`
   p.innerHTML  = `${this.body}`
   h6.innerHTML = `${this.url}`

    topicDiv.appendChild(h2)
    topicDiv.appendChild(h5)
    topicDiv.appendChild(p)
    topicDiv.appendChild(h6)
   

   }

}

// h2.innerHTML = `${this.title}`
// h5.innerHTML = `${this.contributor}`
// p.innerHTML = `${this.body}`
// h6.innerHTML = `${this.url}`