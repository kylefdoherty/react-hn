import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

import Home from './containers/home'
import New from './containers/new'

const OtherComponent = () =>
  <div>Boom</div>

const Nav = () =>
  <nav>
    <ul>
      <li><Link to='/'>Hacker News</Link></li>
      <li><Link to='/new'>new</Link></li>
      <li><Link to='/comments'>comments</Link></li>
      <li><Link to='/show'>show</Link></li>
      <li><Link to='/ask'>ask</Link></li>
      <li><Link to='/jobs'>jobs</Link></li>
    </ul>
  </nav>

const Main = () =>
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/new' component={New} />
      <Route path='/comments' component={OtherComponent} />
      <Route path='/show' component={OtherComponent} />
      <Route path='/ask' component={OtherComponent} />
      <Route path='/jobs' component={OtherComponent} />
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
