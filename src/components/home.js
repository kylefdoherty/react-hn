import React, { Component } from 'react'
import axios from 'axios'

import NewsItem from './news-item'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      topStoryIds: null,
      story: null
    }

    this.componentWillMount = this.componentWillMount.bind(this)
    this.fetchItems = this.fetchItems.bind(this)
  }

  componentWillMount() {
    const self = this
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(function (response) {
        self.setState({
          topStoryIds: response.data
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  fetchItems() {
    const { topStoryIds } = this.state

    return topStoryIds.map((id) => {
      return <NewsItem key={id} storyId={id} />
    })
  }

  render() {
    const topStoryIds = this.state.topStoryIds
    return (
      <div>
        <ol>
          {
            topStoryIds &&
            this.fetchItems()
          }
        </ol>
      </div>
    )
  }
}

export default Home
