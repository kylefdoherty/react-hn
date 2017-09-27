import axios from 'axios'

const _fetchAllItems = (storyIds) => {
  return storyIds.map(id => {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  })
}

const _fetchStories = (type) => {
  return axios.get(`https://hacker-news.firebaseio.com/v0/${type}.json?print=pretty`)
    .then(function (response) {
      return axios.all(_fetchAllItems(response.data))
    })
    .catch(function (error) {
      console.log(error)
    })
}

const fetchStories = {
  top: _fetchStories('topstories'),
  new: _fetchStories('newstories'),
  show: _fetchStories('showstories'),
  ask: _fetchStories('askstories'),
  job: _fetchStories('jobstories'),
}

export default fetchStories
