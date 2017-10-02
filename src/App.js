import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

import StoriesList from './components/stories-list'

const OtherComponent = () =>
  <div>Boom</div>

const Nav = () =>
  <nav>
    <ul>
      <li><Link to='/top'>Hacker News</Link></li>
      <li><Link to='/new'>new</Link></li>
      <li><Link to='/show'>show</Link></li>
      <li><Link to='/ask'>ask</Link></li>
    </ul>
  </nav>

const Main = () =>
  <div>
    <Switch>
      <Route path='/top' render={() => <StoriesList storyType={'top'} />} />
      <Route path='/new' render={() => <StoriesList storyType={'new'} />} />
      <Route path='/show' render={() => <StoriesList storyType={'show'} />} />
      <Route path='/ask' render={() => <StoriesList storyType={'ask'} />} />
    </Switch>
  </div>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
      </div>
    )
  }
}

export default App
