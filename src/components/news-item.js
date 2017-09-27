import React, { Component, PropTypes } from 'react'
import axios from 'axios'

// TODO - refactor into stateless component
class NewsItem extends Component {
  constructor(props) {
    super(props)
  }

  // figure out all helpers like this needed to create story
  // and move into a helpers file. Maybe lib/ or utils/
  formatUrl(url) {
    if (url) {
      return url.split('//')[1].split('/')[0]
    }
  }

  render() {
    const { story } = this.props

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
