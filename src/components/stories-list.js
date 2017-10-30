import React, { Component } from 'react'

import fetchStories from '../api'
import StoryItem from '../components/story-item'

// TODO seperate into container and dumb components
class StoriesList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stories: null,
    }

    this.componentWillMount = this.componentWillMount.bind(this)
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    this.fetchTheStories = this.fetchTheStories.bind(this)
  }

  fetchTheStories(location) {
    const self = this
    fetchStories[location].then((response) => {
      const stories = response.map(item => item.data)
      self.setState({
        stories: stories,
      })
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.storyType !== nextProps.storyType) {
      const type = nextProps.storyType
      this.fetchTheStories(type)
    }
  }

  componentWillMount() {
    const type = this.props.storyType
    this.fetchTheStories(type)
  }

  render() {
    const stories = this.state.stories
    return (
      <div>
        <ol>
          {
            stories ?
            stories.map(story => <StoryItem key={story.id} story={story} />) :
            <p>Loading Stories...</p>
          }
        </ol>
      </div>
    )
  }
}

export default StoriesList
