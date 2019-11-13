import React from 'react';
import { Link } from 'react-router-dom';

const dashboardHeader = (props) => {
    
    return (
        <header>
            <div className="navbar-fixed">
                <nav className="navbar topnav-style">
                    <div className="nav-wrapper"></div>
                </nav>
            </div>
            <ul id="sidenav-left" className="sidenav sidenav-fixed sidenav-style" style={{transform:"translateX(0)"}}>
                <li className="sidenav-heading"><a href="#" className="logo-container logo-brand">STUTER<i className="material-icons left">spa</i></a></li>
                <li className="no-padding">
                    <ul className="collapsible collapsible-accordion">
                        <div className="collapsible-body" style={{display:"block"}}>
                            <ul>
                                <li>
                                    <Link to={'/dashboard/main'} className="waves-effect active">Dashboard<i className="material-icons">web</i></Link>
                                </li>
                                <li>
                                    <Link to={'/EditProfile'} className="waves-effect active">Edit Profile<i className="material-icons">account_circle</i></Link>
                                </li>
                            </ul>
                        </div>
                    </ul>
                </li>
            </ul>   
        </header>
    )
}

export default dashboardHeader;