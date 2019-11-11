import React from 'react';
import {
    Link
  } from 'react-router-dom';

class DashboardMain extends React.Component {

    render () {
        return (
            <div className="container sidebar-active dashboard-bkgrd">
                <div className="row">
                    {/* this will be the avatar div */}
                    {/* <Avatar size="100" round={true} /> */}
                    <h1 className="welcome-row">Welcome to Stutor! </h1>
                    <p>Hello {this.props.userData.name}</p>
                    <button onClick={this.props.handleClick}>Test the protected route</button>
                    <button onClick={this.props.logout}>LOGOUT</button><br />
                    <p>{this.props.lockedResult}</p>
                </div>        
                <div className="row">
                    {/* this will be the Pick a School Level div*/}
                    <h3 className="school-row">Pick a School Level</h3>
                   <Link to="/dashboard/pickasubject" name="Test1" onClick={this.props.levelAdd}>Add1</Link>
                    <button name='Test2' onClick={this.props.levelAdd}>Add2</button>
                    <button name='Test3' onClick={this.props.levelAdd}>Add3</button>
                </div>
                <div className="row">
                    <div className="col s6">
                        {/* this is the My Tutor div */}
                        <h3 className="tutor-title">My Tutors</h3>
                        <div>
                            {/* <Avatar src={tutor.img} size="25" round={true} /> */}
                            <p className="tutor-row">Tutor placeholder</p>
                            <form>
                                <input type="submit" value="Message!" />
                                <input type="submit" value="Delete" />
                            </form>
                        </div>
                    </div>
                    <div className="col s6">
                        {/* this is the Meassage component div */}
                        <h3 className="message-title">Messages</h3>
                        <p className="message-row">Placeholder</p>
                        <form className="message-button">
                            <input type="submit" value="Message" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardMain;