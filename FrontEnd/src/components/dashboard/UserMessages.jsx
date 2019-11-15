import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UserMessages extends React.Component {

    state = {
        loggedInUserData: [],
    }

    grabUserData = () => {
        axios.get(`/dashboard/${this.props.user}`)
        .then( response => {
            this.setState({
                loggedInUserData: response.data,
            })
        })
    }

    componentDidMount = () => {
        this.grabUserData()
    }

    render () {
        // const numMsgs = this.state.loggedInUserData.messages.length

        return (
            <>
                <h5>Your Messages</h5>
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="http://unit3.darland.info/img/user-bg.jpg" alt="user background" />
                        <img className="tutor-avatar responsive-img" src="http://unit3.darland.info/img/inbox-icon.png" alt="" />
                    </div>
                    <div className="card-content">
                        <p className="user-margin-6"><i className="mdi-action-perm-identity cyan-text text-darken-2"></i> Check your messages here</p>
                        <Link to="/dashboard/inbox" className="waves-effect waves-light btn"><i className="material-icons left"></i>Open</Link>
                    </div>
                </div>
            </>    
        )
    }
}

export default UserMessages