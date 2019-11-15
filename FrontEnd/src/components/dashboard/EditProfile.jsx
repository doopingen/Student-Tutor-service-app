import React from 'react';
import axios from 'axios';
import Redirect from 'react-router-dom';

class EditProfile extends React.Component {
    state = {
        name: '',
        email: '',
        bio: '',
        url: '',
    }

    componentDidMount = () => {
        this.propsIntoState()
    }

    propsIntoState = () => {
        this.setState({
            name: this.props.userData.name,
            email: this.props.userData.email,
            bio: this.props.userData.bio,
            url: this.props.userData.url
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`/dashboard/${this.props.userData._id}`, {
            name: this.state.name,
            email: this.state.email,
            bio: this.state.bio,
            url: this.state.url
        }).then( response => {
            if (response.data.type === 'error') {
              console.log("ERROR:", response.data.message)
            } else {
              console.log("Successfuly sent message")
            }
        }).catch( err => {
            console.log(err)
        })
    }    
    
    render() {
        return (
            <div className='container sidebar-active'>
                <h3>Edit Your Profile Now</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <input type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name}/><br />
                        <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email}/><br />
                        <input type="text" name="bio" placeholder="Bio" onChange={this.handleChange} value={this.state.bio}/>
                        <input type="text" name="url" placeholder="URL" onChange={this.handleChange} value={this.state.url}/>
                    </div>
                    <div className="row">
                        <input class="waves-effect waves-light btn" type="submit" value="SAVE" />
                    </div>
                </form> 
            </div>
        )
    }
}


export default EditProfile;