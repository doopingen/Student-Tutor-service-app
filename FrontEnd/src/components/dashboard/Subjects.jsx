import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Subjects extends React.Component {

  state = {
    subjects: [],
  }

  grabSubjectData = () => {
    axios.get('/dashboard/subjects')
    .then( response => {
      this.setState({
        subjects: response.data
      })
    })
  }
  
  componentDidMount = () => {
    this.grabSubjectData()
  }

  render() {
    let mappedSubjects = this.state.subjects.map((subject, id )=> {
      if (this.props.level === subject.schoolLevel) {
        return (
            <li key={id} className="collection-item">
              <div className="row">
                <div className="col s4">
                  <p className="subject-title">{subject.schoolLevel}</p>
                  <p className="collections-content">{subject.category}</p>
                </div>
                <div className="col s5">
                  <span className="subject-cat grey">{subject.subject}</span>
                </div>
                <div className="col s3">
                  <Link id={id} to="/dashboard/pickatutor" className="waves-effect waves-light btn" name={subject.category} onClick={this.props.handleSubjectOnClick}><i className="material-icons left"></i>Add</Link>
                </div>
              </div>                
            </li>
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
          <ul className="collection">
            <li className="collection-item avatar">
                <h5>Your Level Options</h5>
            </li>
            {mappedSubjects}
          </ul>
        </div>
      </div>
    )
  }
}

export default Subjects;
