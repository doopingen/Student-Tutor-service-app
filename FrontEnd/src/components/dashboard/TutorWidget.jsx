import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TutorWidget extends React.Component {

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

    render() { 

        return (
            <>
                <h5>Your Primary Tutor</h5>
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="http://unit3.darland.info/img/user-bg.jpg" alt="user background" />
                    <img className="tutor-avatar responsive-img" src="http://demo.geekslabs.com/materialize/v2.1/layout03/images/avatar.jpg" alt="" />
                    </div>        
                    <div className="card-content"> 
                        <span className="card-title grey-text text-darken-4">{this.state.loggedInUserData.tutor}</span>
                        <p><i className="mdi-action-perm-identity cyan-text text-darken-2"></i> {this.state.loggedInUserData.level}</p>
                        <p><i className="mdi-action-perm-phone-msg cyan-text text-darken-2"></i> {this.state.loggedInUserData.subject}</p>
                    </div>
                </div>
            </>    
        )
    }
}

export default TutorWidget