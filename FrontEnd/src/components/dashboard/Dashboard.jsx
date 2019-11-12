import React from 'react';
import axios from 'axios';
import DashboardHeader from './DashboardHeader'
import DashboardMain from './DashboardMain'
import Subjects from './Subjects'
import Avatar from 'react-avatar';
import EditProfile from './EditProfile';
import {
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
    this.setState({
        level: e.target.name
    })
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
          <Route path='/dashboard/main' render={(props) => <DashboardMain {...props} levelAdd={this.handleLevelOnClick} userData={this.state.userData} lockedResult={this.props.lockedResult} handleClick={this.props.handleClick} logout={this.props.logout}/>}/>
          <Route path='/dashboard/pickasubject' render={(props) => <Subjects {...props} level={this.state.level} userData={this.state.userData}/>}/>
          <Route path='/editprofile' render={(props) => <EditProfile {...props} levelAdd={this.handleLevelOnClick} userData={this.state.userData} lockedResult={this.props.lockedResult} handleClick={this.props.handleClick} logout={this.props.logout}/>}/> />
        </Router>
      </>
    )
  }
}

export default Dashboard;