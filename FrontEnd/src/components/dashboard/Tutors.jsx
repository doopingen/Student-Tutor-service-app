import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Tutors extends React.Component {

  state = {
    tutors: [],
  }

  grabTutorData = () => {
    axios.get('/dashboard/tutors')
    .then( response => {
      this.setState({
        tutors: response.data
      })
    })
  }
  
  componentDidMount = () => {
    this.grabTutorData()
  }

  render() {
    let mappedTutors = this.state.tutors.map((tutor, id )=> {
      if (this.props.subject === tutor.subject) {
        return (
            <li key={id}>
                <h3>{tutor.name}</h3>
                <h5>{tutor.subject}</h5>
                <h5>{tutor.bio}</h5>
                <Link id={id} to="/dashboard/message" id={tutor._id} name={tutor.name} onClick={this.props.handleTutorOnClick}>Message!</Link>
            </li>
        )}
    })
    return(
      <div className="container sidebar-active dashboard-bkgrd">
        <div className="row">
          <div className="col s6">
            <h3>My Level</h3>
            <h5>{this.props.level}</h5>
            <h5>{this.props.subject}</h5>
          </div>
          <div className="col s6">
            <h3>My Info</h3>
            <h5>{this.props.userData.name}</h5>
            <h5>{this.props.userData.email}</h5>
          </div>
        </div>
        <div className="row">
          <ul>
            {mappedTutors}
          </ul>
        </div>
      </div>

    )
  }
}

export default Tutors;