import React, { Component } from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import NavBar from './components/NavBar/NavBar'
import Photos from './components/Photos/Photos'
import PostDetails from './components/Home/PostDetails'
import Redirect from './components/Redirect'
import { connect } from 'react-redux'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-156816671-1');


export class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Redirect} />
            <Route path='/page/:page2' component={Home} />
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
