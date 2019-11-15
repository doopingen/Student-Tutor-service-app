import React from 'react';
import axios from 'axios';
import ModalonMessage from './ModalonMessage';

class MessageReply extends React.Component {

  state = {
    title: '',
    body: '',
    modal: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/dashboard/messages/${this.props.tutorid}`, {
      senderId: this.props.userData._id,
      recipientId: this.props.tutorid,
      senderName: this.props.tutor,
      recipientName: this.props.userData.name,
      title: e.target[3].value,
      body: e.target[4].value
    }).then( response => {
      if (response.data.type === 'error') {
        console.log("ERROR:", response.data.message)
      } else {
        console.log("Successfuly posted message for sender boss")
      }
    });
    axios.post(`/dashboard/messages/${this.props.userData._id}`, {
      senderId: this.props.userData._id,
      recipientId: this.props.tutorid,
      senderName: this.props.tutor,
      recipientName: this.props.userData.name,
      title: e.target[3].value,
      body: e.target[4].value
    }).then( response => {
      if (response.data.type === 'error') {
        console.log("ERROR:", response.data.message)
      } else {
        this.setState({
            modal: true
        });
      }
    })
  } 
    
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  renderModal = () => {
    if (this.state.redirect) {
      return console.log("Did this work?")
    }
  }

  componentDidMount = () => {
  }

  render() {
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
          <ModalonMessage trigger={this.state.modal}/>
          <form className="col s12" onSubmit={this.handleSubmit}>
              <div className="row">
                  <div className="input-field col s12">
                      <input disabled name="recipientName" value={this.props.tutor} id="disabled" type="text" className="validate" />
                      <input type="hidden" name="recipientId" value={this.props.tutorid} />
                      <input type="hidden" name="senderID" value={this.props.userData._id} />
                  </div>
              </div>
              <div className="row">
                  <div className="input-field col s12">
                      <textarea id="usertitle" className="materialize-textarea" name="title" onChange={this.handleChange} value={this.state.title}></textarea>
                      <label for="usertitle">Type your title here</label>
                  </div>
              </div>
              <div className="row">
                  <div className="input-field col s12">
                      <textarea id="usermsg" className="materialize-textarea" name="body" onChange={this.handleChange} value={this.state.body}></textarea>
                      <label for="usermsg">Type your messagegygygygyg here</label>
                  </div>
              </div>
              <div className="row">
                  <input type="submit" value="Send Message and Finish" />
              </div>
          </form>
        </div>
      </div>   
    )
  }
}

export default MessageReply;

