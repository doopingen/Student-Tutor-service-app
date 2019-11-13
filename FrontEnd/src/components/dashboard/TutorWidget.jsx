import React from 'react';
import { Router } from 'react-router-dom';

class TutorWidget extends React.Component {
    render () {
        return (
            <>
            <h3 className="tutor-title">My Tutors</h3>
                <div className="image">
                    {/* <Avatar src={tutor.img} size="25" round={true} /> */}
                </div>
                    <p className="tutor-row">Tutor placeholder</p>
                        <form>
                            <input type="submit" value="Message!" />
                            <input type="submit" value="Delete" />
                        </form>
                        </>
        )
    }
}

export default TutorWidget;