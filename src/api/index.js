import axios from 'axios'

const _fetchAllItems = (storyIds) => {
  return storyIds.map(id => {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  })
}

const defaultRange = [0, 30]
const _fetchStories = (type, range = defaultRange) => {
  return axios.get(`https://hacker-news.firebaseio.com/v0/${type}.json?print=pretty`)
    .then(function (response) {
      const slice = response.data.slice(range[0], range[1])
      return axios.all(_fetchAllItems(slice))
    })
    .catch(function (error) {
      console.log("ERROR", error)
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
