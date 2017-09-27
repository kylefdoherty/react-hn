import React, { Component } from 'react'
import axios from 'axios'

import fetchNewStories from '../api'

import NewsItem from '../components/news-item'

class New extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newStories: null,
    }

    this.componentWillMount = this.componentWillMount.bind(this)
  }

  componentWillMount() {
    const self = this
    fetchNewStories().then(function (response) {
      const stories = response.map(item => item.data)
      self.setState({
        newStories: stories
      })
    })
  }

  render() {
    const newStories = this.state.newStories
    return (
      <div>
        <ol>
          {
            newStories &&
            newStories.map(story => <NewsItem key={story.id} story={story} />)
          }
        </ol>
      </div>
    )
  }
}

export default New
