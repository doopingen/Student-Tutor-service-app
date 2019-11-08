import React from 'react';
import {
    Link
  } from 'react-router-dom';

const frontPageHeader = () => {
    return(
        <nav class="light-blue lighten-1" role="navigation">
            <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Stuter</a>
            <ul class="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
            </ul>
            {/* Mobile nav for front page below*/}
            <ul id="nav-mobile" class="sidenav">
                <li><Link to="/">Home</Link></li>
            </ul>
            <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            </div>
        </nav>
    )
}

export default frontPageHeader