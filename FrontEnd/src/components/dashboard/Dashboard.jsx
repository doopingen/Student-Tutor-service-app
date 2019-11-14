import React from 'react';
import axios from 'axios';
import DashboardHeader from './DashboardHeader';
import DashboardMain from './DashboardMain';
import Subjects from './Subjects';
import EditProfile from './EditProfile';
import Tutors from './Tutors';
import Message from './Message';
import Inbox from './Inbox';
import Map from './Map';
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
    level: '',
    subject: '',
    tutor: '',
    tutorid: ''
  }

  handleLevelOnClick = (e) => {
    this.setState({
        level: e.target.name
    })
  }

  handleSubjectOnClick = (e) => {
    this.setState({
        subject: e.target.name
    })
  }

  handleTutorOnClick = (e) => {
    this.setState({
        tutor: e.target.name,
        tutorid: e.target.id
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
          <Route path='/dashboard/pickasubject' render={(props) => <Subjects {...props} level={this.state.level} userData={this.state.userData} handleSubjectOnClick={this.handleSubjectOnClick}/>}/>
          <Route path='/dashboard/pickatutor' render={(props) => <Tutors {...props} level={this.state.level} subject={this.state.subject} tutor={this.state.tutor} userData={this.state.userData} handleTutorOnClick={this.handleTutorOnClick}/>}/>
          <Route path='/dashboard/message' render={(props) => <Message {...props} level={this.state.level} subject={this.state.subject} tutor={this.state.tutor} tutorid={this.state.tutorid} userData={this.state.userData} />}/>
          <Route path='/editprofile' render={(props) => <EditProfile {...props} levelAdd={this.handleLevelOnClick} userData={this.state.userData} lockedResult={this.props.lockedResult} handleClick={this.props.handleClick} logout={this.props.logout}/>}/>
          <Route path='/dashboard/inbox' render={(props) => <Inbox {...props} levelAdd={this.handleLevelOnClick} userData={this.state.userData}/>}/>
          <Route path='/dashboard/map' render={(props) => <Map {...props} userData={this.state.userData}/>} />
        </Router>
      </>
    )
  }
}

export default Dashboard;