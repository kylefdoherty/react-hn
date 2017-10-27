import React, { Component } from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

import StoriesList from './components/stories-list'

const navStyles = {
  height: '60px',
  background: 'black',
}

const navLinksStyles = {
  listStyleType: 'none',
  height: '100%',
  padding: '0px',
  margin: '0px',
  display: 'flex',
  alignItems: 'center',
}

const linkStyles = {
  paddingLeft: '10px',
  color: 'white',
}

const Nav = () =>
  <nav style={navStyles}>
    <ul style={navLinksStyles} className="nav-links">
      <li className="nav-links__link"><Link style={linkStyles} to='/top'>Hacker News</Link></li>
      <li className="nav-links__link"><Link style={linkStyles} to='/new'>new</Link></li>
      <li className="nav-links__link"><Link style={linkStyles} to='/show'>show</Link></li>
      <li className="nav-links__link"><Link style={linkStyles} to='/ask'>ask</Link></li>
    </ul>
  </nav>

const Main = () =>
  <div>
    <Switch>
      <Redirect from="/" exact to="/top" />
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
