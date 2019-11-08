import React from 'react';
import './App.css';
import Login from './components/frontpage/Login';
import Signup from './components/frontpage/Signup';
import FrontPageHeader from './components/frontpage/FrontPageHeader';
import FrontPageFooter from './components/frontpage/FrontPageFooter';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  state = {
    token: '',
    user: null,
    errorMessage: '',
    lockedResult: ''
  }

  checkForLocalToken = () => {
    // Look in localStorage for a token
    let token = localStorage.getItem('mernToken')
    if (!token || token === 'undefined') {
      // if no token, remove all evidence of mernToken from localStorage and state
      localStorage.removeItem('mernToken')
      this.setState({
        token: '',
        user: null
      })
    } else {
      // if found a token, verify it on the backend
      axios.post('/auth/me/from/token', {token})
        .then( response => {
          if (response.data.type === 'error') {
            localStorage.removeItem('mernToken')
            this.setState({
              token: '',
              user: null,
              errorMessage: response.data.message
            })
          } else {
            // if verified, store it back in localStorage and state
            localStorage.setItem('mernToken', response.data.token)
            this.setState({
              token: response.data.token,
              user: response.data.user
            })
          }
        })
    }
  }

  componentDidMount = () => {
    this.checkForLocalToken()
  }

  liftToken = ({token, user}) => {
    this.setState({
      token,
      user
    })
  }

  logout = () => {
    localStorage.removeItem('mernToken')
    this.setState({
      token: '',
      user: null
    })
  }

  handleClick = () => {
    let config = {
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    }
    axios.get('/locked/test', config).then( response => {
      this.setState({
        lockedResult: response.data
      })
    })
  }

  render() {
    let contents;
    if (this.state.user) {
      contents = (
        <>
        <Router>
          <p>Hello, {this.state.user.name}</p>
          <button onClick={this.handleClick}>Test the protected route</button>
          <button onClick={this.logout}>LOGOUT</button><br />
          <p>{this.state.lockedResult}</p>
        </Router>
        </>
      )
    } else {
      contents = (
        <>
          {/* <Signup liftToken={this.liftToken} /> */}
          <Login liftToken={this.liftToken} />
        </>
      )
    }
    return (
      <Router>
        <div class="section no-pad-bot" id="index-banner">
          <FrontPageHeader />
          <div class="container">
            <div class="row center">
                <div class="col">
                  <h1 class="header center orange-text">Welcome!</h1>
                  <h5 class="header col s12 light">Start your journey to a better understanding here</h5>
                  <a href="#" id="download-button" class="btn-large waves-effect waves-light orange">Signup!</a>
                </div>
                <div class="col">
                  {contents}
                </div>
            </div>
          </div>
          <FrontPageFooter />
        </div>
      </Router>
    )
  }
}


export default App;
