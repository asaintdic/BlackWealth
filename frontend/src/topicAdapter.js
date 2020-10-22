class TopicAdapter{

    fetchTopics(){
        fetch('http://localhost:3000/topics')
        .then(res => res.json())
        .then(allTopics => {
         let topics = Object.values(allTopics);
              
            topics.forEach((topic) => { topic.forEach((top) => {
                let newTopic = new Topic(top.id, top.attributes['name'], top.attributes['section'], top.attributes['title'], top.attributes['body'], top.attributes['contributor'], top.attributes['url'])
                newTopic.renderTopic(top.id, top.attributes['name'], top.attributes['section'], top.attributes['title'], top.attributes['body'], top.attributes['contributor'], top.attributes['url'])
            })
            })
        })
    }
}

// function fetchTopics(){
//     fetch('http://localhost:3000/topics')
//     .then(res => res.json())
//     .then(topics => {
//      let tops = Object.values(topics);
          
//         tops.forEach((top) => {
//             let newTopic = new Topic(top.id, top.name, top.section, top.title, top.body, top.contributor, top.url)
//             newTopic.console.log(top.id, top.name, top.section, top.title, top.body, top.contributor, top.url)
//         })
//     })
// }

// fetchTopics(){
//     fetch('http://localhost:3000/topics')
//     .then(res => res.json())
//     .then(topics => {
//      let tops = Object.values(topics);
          
//         tops.forEach((top) => {
//             let newTopic = new Topic(top.id, top.name, top.section, top.title, top.body, top.contributor, top.url)
//             console.log(newTopic)
//         })
//     })
// }

// fetchTopics(){
//     fetch('http://localhost:3000/topics')
//     .then(res => res.json())
//     .then(topics => {
//         for (const topic of topics.children) {
//             let newTopic = new Topic(topic.id, topic.name, topic.section, topic.title, topic.body, topic.contributor, topic.url)
//             newTopic.console.log(topic.id, topic.name, topic.section, topic.title, topic.body, topic.contributor, topic.url)
//         }
//     })
// }c

// function fetchTopics(){
//     fetch('http://localhost:3000/topics')
//     .then(res => res.json())
//     .then(allTopics => {
//      let topics = Object.values(allTopics);
          
//         topics.forEach((topic) => { topic.forEach((top) => {
//             let newTopic = new Topic(top.id, top.attributes['name'], top.attributes['title'], top.attributes['body'], top.attributes['contributor'], top.attributes['url'])
//             console.log(newTopic)
//         })
//         })
//     })
// }