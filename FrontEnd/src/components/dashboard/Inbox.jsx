import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class userInbox extends React.Component {

  state = {
      loggedInUserData: [],
      messageData: []
  }

  grabUserData = () => {
    axios.get(`/dashboard/${this.props.userData._id}`)
    .then( response => {
      this.setState({
        loggedInUserData: response.data,
        messageData: response.data.messages
      })
    })
  }

handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/dashboard/messages/delete/${this.state.loggedInUserData._id}`, {
        title: e.target[0].value,
    }).then( response => {
    if (response.data.type === 'error') {
        console.log("ERROR:", response.data.message)
      } else {
        console.log(response.data)
      }
    }).catch( err => {
      // This block catches rate limited errors
    console.log(err)
    })
    .then( response => {
        this.grabUserData();
    })
  }

  componentDidMount = () => {
      this.grabUserData()
  }

render() {
    let mappedInbox = this.state.messageData.map((message, id) => {
        return (
            <tr id={message.title}>
                <td>{message.recipientName}</td>
                <td>{message.senderName}</td>
                <td>{message.title}</td>
                <td>{message.body}</td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        <input type="hidden" name="title" value={message.title} />
                        <input class="waves-effect waves-light btn" type="submit" value="Delete" />
                    </form>
                </td>
                <td>
                    <Link className="waves-effect waves-light btn" id={id} to="/dashboard/reply" id={message.recipientId} name={message.senderName} onClick={this.props.handleTutorOnClick}>Reply</Link>
                </td>    
            </tr>
        )
    })
    return (
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
            <div class="row">
                <div id="admin" className="col s12">
                    <h5>Inbox</h5>
                    <div className="card">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sender</th>
                                    <th>Recipient</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {mappedInbox}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default userInbox;

















