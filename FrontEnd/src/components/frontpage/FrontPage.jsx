import React from 'react';
import FrontPageHeader from './FrontPageHeader';
import FrontPageFooter from './FrontPageFooter';
import Login from './Login'
import Modal from './modal';

const frontPage = (props) => {

    return(
        <div class="section no-pad-bot" id="index-banner">
            <FrontPageHeader />
            <div class="container">
                <div class="row center">
                    <div class="col">
                        <h1 class="header center grey-text darken-3">Welcome!</h1>
                        <h5 class="header col s12 light">Start your journey to a better understanding here</h5>
                        <Modal />
                    </div>
                    <div class="col">
                        <Login liftToken={props.liftToken} />
                    </div>
                </div>
            </div>
            <FrontPageFooter />
        </div>
    )

}

export default frontPage
