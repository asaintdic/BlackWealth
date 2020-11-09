class TopicAdapter{

    fetchTopics(){
        fetch('http://localhost:3000/topics')
        .then(res => res.json())
        .then(topics => {
            topics.data.forEach(topic => {
                let newTopic = new Topic(topic, topic.attributes)
             
                document.querySelector('#topics').innerHTML += newTopic.renderTopic()
            })
            })
        }
    }

