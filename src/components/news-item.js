import React, { Component, PropTypes } from 'react'
import axios from 'axios'

class NewsItem extends Component {
    constructor(props) {
    super(props)

    this.state = {
      story: null
    }

    this.componentWillMount = this.componentWillMount.bind(this)
  }

  componentWillMount() {
    const { storyId } = this.props
    const self = this
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
      .then(function (response) {
        self.setState({
          story: response.data
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  formatUrl(url) {
    if (url) {
      return url.split('//')[1].split('/')[0]
    }
  }

  render() {
    const story = this.state.story

    return (
      <li>
        {
          story &&
          <div>
            <a href={story.url}>
              <h2>{story.title}</h2>
            </a>
            <a href={story.url}>({this.formatUrl(story.url)})</a>
            <p>{story.score} points by {story.by} | {story.kids ? story.kids.length : 0} comments</p>
          </div>
        }
      </li>
    )
  }
}

export default NewsItem
