import React from 'react';
import axios from 'axios';
import DashboardHeader from './DashboardHeader'
import DashboardMain from './DashboardMain'
import Subjects from './Subjects'
import Avatar from 'react-avatar';import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

class Dashboard extends React.Component {

  state = {
    loggedInUser: this.props.user,
    userData: [],
    tutor: null,
    level: '',
  }

  handleLevelOnClick = (e) => {
    e.preventDefault();
    this.setState({
        level: e.target.name
    });
    // return <Redirect to='/subjects'/>
  }

  grabUserData = () => {
    axios.get(`/dashboard/${this.state.loggedInUser._id}`)
    .then( response => {
      this.setState({
        userData: response.data
      })
    })
  }
  
  componentDidMount = () => {
    this.grabUserData()
  }

  render() {
    return (
      <>
        <Router>
          <DashboardHeader />
          <Route path='/dashboard' render={(props) => <DashboardMain {...props} levelAdd={this.handleLevelOnClick} userData={this.state.userData} lockedResult={this.props.lockedResult} handleClick={this.props.handleClick} logout={this.props.logout}/>}/>
          <Route path='/pickasubject' render={(props) => <Subjects {...props} level={this.state.level} userData={this.state.userData}/>}/>
        </Router>
      </>
    )
  }
}

export default Dashboard;