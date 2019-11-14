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
                        <input type="submit" value="Delete" />
                    </form>
                </td>
                <td>
                    <Link id={id} to="/dashboard/message" id={message.recipientId} name={message.senderName} onClick={this.props.handleTutorOnClick}>Reply</Link>
                </td>    
            </tr>
        )
    })
    return (
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
            <div class="row">
                <div id="admin" class="col s12">
                    <div class="card material-table">
                        <div class="table-header">
                            <h5 class="table-title">Inbox</h5>
                            <div class="actions">
                            {/* <a href="#add_users" class="modal-trigger waves-effect btn-flat nopadding"><i class="material-icons">person_add</i></a> */}
                            </div>
                        </div>
                        <table id="datatable">
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

















