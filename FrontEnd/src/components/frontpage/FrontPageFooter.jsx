import React from 'react';

const frontPageFooter = () => {
    return(
        <>
        <div class="container">
            <div class="section">
                {/* <!--   Icon Section   --> */}
                <div class="row">
                    <div class="col s12 m4">
                        <div class="icon-block">
                            <h2 class="center light-blue-text"><i class="material-icons">Step 1</i></h2>
                            <h5 class="center">Find a Tutor</h5>
                
                            <p class="light">Our App allows you to choose specific subjects that your struggling in and connect to a qualified tutor, all you have to do to start your journey is select a subject your interested in.</p>
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="icon-block">
                            <h2 class="center light-blue-text"><i class="material-icons">Step 2</i></h2>
                            <h5 class="center">Select a Subject</h5>
                
                            <p class="light">Once you've found a subject your interested in, just hit the add button! You'll be able to choose a tutor from our list of qualified tutors.</p>

                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="icon-block">
                            <h2 class="center light-blue-text"><i class="material-icons">Step 3</i></h2>
                            <h5 class="center">Make an appointment</h5>
                
                            <p class="light">Our messaging system will allow you to contact that tutor right away, setting up appointments or even just asking questions will be as easy as hitting the send button.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="page-footer orange">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                    <h5 class="white-text">Company Bio</h5>
                    <p class="grey-text text-lighten-4">We are a bunch of scrappy kids from General Assembly trying to launch a career in app development</p>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    <p>Made by <a class="orange-text text-lighten-3" href="#">Team Awesome</a></p>
                </div>
            </div>
        </footer>
        </> 
    )
}

export default frontPageFooter