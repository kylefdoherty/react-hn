import React, { Component, PropTypes } from 'react'

const storyItemStyles = {
  textAlign: 'left',
  paddingLeft: '20px',
}

const storyItemLink = {
  textDecoration: 'none',
  color: 'black',
}

const h2Styles = {
  fontSize: '18px',
}

// TODO - refactor into stateless component
// TODO seperate into container and dumb components
class StoryItem extends Component {
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
      <li style={storyItemStyles}>
        {
          story &&
          <div>
            <a style={storyItemLink} href={story.url}>
              <h2 style={h2Styles}>
                {story.title}
              </h2>
            </a>
            <a style={storyItemLink} href={story.url}>({this.formatUrl(story.url)})</a>
            <p>{story.score} points by {story.by} | {story.kids ? story.kids.length : 0} comments</p>
          </div>
        }
      </li>
    )
  }
}

export default StoryItem
