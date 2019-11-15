import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then( response => {
      if (response.data.type === 'error') {
        console.log("ERROR:", response.data.message)
      } else {
        localStorage.setItem('mernToken', response.data.token);
        this.props.liftToken(response.data)
      }
    }).catch( err => {
      // Rate limiter catch block
      console.log(err)
    })
  }

  render() {
    return (
      <div className="row">
        <h5>Log into your account:</h5>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <input className="input-field col s12" type="text" placeholder="Email address" name="email" onChange={this.handleChange} value={this.state.email} /><br />
          <input className="input-field col s12" type="password" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} /><br />
          <input className="waves-effect waves-light btn-large cta-white" type="submit" value="Log In!" />
        </form>
      </div>
    )
  }
}

export default Login;
