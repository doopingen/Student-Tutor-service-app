import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    message: '',
    role: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/auth/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    }).then( response => {
      if (response.data.type === 'error') {
        console.log("ERROR:", response.data.message)
        // TODO: Maybe put this message in state?
      } else {
        localStorage.setItem('mernToken', response.data.token)
        this.props.liftToken(response.data)
      }
    }).catch( err => {
      // This block catches rate limited errors
      console.log(err)
    })
  }

  render() {
    return (
      <div className="Signup">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name} /><br />
          <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} /><br />
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} /><br />
          <input type="text" name="role" placeholder="Role" onChange={this.handleChange} value={this.state.role} /><br />
          <input type="submit" value="Sign Up!" />
        </form>
      </div>
    )
  }
}

export default Signup;
