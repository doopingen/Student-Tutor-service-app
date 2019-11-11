import React from 'react';
import axios from 'axios';

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
      return (
          <li key={id}>
              <span>{subject.schoolLevel}</span>
              <span>{subject.subject}</span>
              <span>{subject.category}</span>
              <button id={id} name={subject.subject}>Add</button>
          </li>
      )
    })
    return(
      <div className="container sidebar-active dashboard-bkgrd">
        <div className="row">
          <div className="col s6">
            <h3>My Level</h3>
            <h5>{this.props.level}</h5>
          </div>
          <div className="col s6">
            <h3>My Info</h3>
            <h5>{this.props.userData.name}</h5>
            <h5>{this.props.userData.email}</h5>
          </div>
        </div>
        <div className="row">
          <ul>
            {mappedSubjects}
          </ul>
        </div>
      </div>

    )
  }
}

export default Subjects;