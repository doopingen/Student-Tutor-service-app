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
                {/* this is the My Tutor div */}
                <h3 className="tutor-title">My Tutors</h3>
                <div>
                    {/* <Avatar src={tutor.img} size="25" round={true} /> */}
                    <p className="tutor-row">Tutor placeholder</p>
                    <form>
                        <input type="submit" value="Message!" />
                        <input type="submit" value="Delete" />
                    </form>
                    <Link to="/dashboard/map" name="map">Map</Link>
                </div>
            </>    
        )
    }
}

export default TutorWidget