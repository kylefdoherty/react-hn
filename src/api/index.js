import axios from 'axios'

const topStories = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
const newStories = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty'
const showStories = 'https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty'
const askStories = 'https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty'
const jobstories = 'https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty'

// axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)

const _fetchAllItems = (storyIds) => {
  return storyIds.map(id => {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  })
}

const fetchNewStories = () => {
  return axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
    .then(function (response) {
      return axios.all(_fetchAllItems(response.data))
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default fetchNewStories
