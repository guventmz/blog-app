import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import Contact from './components/Contact'
import About from './components/About'
import NavBar from './components/NavBar'
import Photos from './components/Photos'
import PostDetails from './components/Home/PostDetails'
import { connect } from 'react-redux'




export class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/posts/:postId' component={PostDetails}/>
            <Route path='/photos/:page' component={Photos}/>
          </Switch>
      </BrowserRouter>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(App)

