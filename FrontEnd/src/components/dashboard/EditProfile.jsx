import React from 'react';
import axios from 'axios';
import Redirect from 'react-router-dom';

class EditProfile extends React.Component {
    state = {
        isLoggedIn: this.props.user,
        name: '',
        email: '',
        password: '',
        bio: '',
        pic: '',
        updatedData: []
    }

    //in order to edit a specific user profile, first we must get the user's data.
    //at load of page, use componentDidMount() to load current user's data immediately.
    componentDidMount = () => {
        //axios call to server for logged in user's id. since it is initialized in state,
        //call it from state
        axios.get(`/editprofile/${this.state.isLoggedIn}`)
        .then(response => {
            console.log(`current user`)
            this.setState({
                name: response.data.name,
                email: response.data.email,
                password: response.data.password,
                bio: response.data.bio,
                pic: response.data.pic,
                updatedData: response.data
            })
        })
    }

    // componentDidMount = () => {
    //     this.updateUserData()
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.put('/:id', this.state)
            .then(response => {
                this.setState({
                    // redirect: <Redirect to={`editprofile`} />
                })
            })

    }
    
    render() {
        return (
            <div className='container sidebar-active'>
                <h3>Edit Your Profile Now</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name}/><br />
                    <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email}/><br />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/><br />
                    <input type="text" name="bio" placeholder="Bio" onChange={this.handleChange}/><br />
                    <input name="file" type="file" class="file-upload" data-cloudinary-field="image_id"
data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}" onChange={this.handleChange}/><br />
                <input type="submit" value="SAVE" />
                <input type="submit" value="CANCEL" />
                </form> 
            </div>
        )
    }
}


export default EditProfile;