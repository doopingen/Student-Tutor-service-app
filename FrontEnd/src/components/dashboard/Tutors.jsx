import React from 'react';
import axios from 'axios';
import Avatar from 'react-avatar';
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
          <div class="card horizontal">
            <div class="card-image">
              <Avatar name={tutor.name} size="75" round={true} />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <span class="card-title grey-text text-darken-4">{tutor.name}</span>
                <p>{tutor.subject}</p>
                <p className="tutor-bio">{tutor.bio}</p>
              </div>
              <div class="card-action">
                <Link id={id} to="/dashboard/message" className="waves-effect waves-light btn" name={tutor.name} onClick={this.props.handleTutorOnClick}><i className="material-icons left"></i>Message</Link>
              </div>
            </div>
          </div>
        )}
    })
    return(
      <div className="container sidebar-active dashboard-bkgrd">
          <div className="row">
              <div className="col m6 s12">
                  <div className="card red darken-4 darken-1" style={{height: '225px'}}>
                      <div className="card-content white-text">
                          <span className="card-title">My Education Needs</span>
                      </div>
                      <div className="card-action white-text">
                          <h6 className="inline">{this.props.level}</h6><span className="spacer">|</span><h6 className="inline">{this.props.subject}</h6>
                      </div>
                  </div>
              </div>
              <div className="col s12 m6">
                  <div className="card red darken-4 horizontal" style={{height: '225px'}}>
                      <div className="card-image">
                          <img className="user-profile-img" src={this.props.userData.url} />
                      </div>
                      <div className="card-stacked">
                          <div className="card-content white-text">
                              <span className="card-title">My Profile</span>
                                  <p>{this.props.userData.name}</p>
                                  <p>{this.props.userData.email}</p>
                          </div>
                          <div className="card-action">
                              <Link to="/EditProfile" className="text-white">Edit Profile</Link>
                          </div>
                      </div>
                  </div>    
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