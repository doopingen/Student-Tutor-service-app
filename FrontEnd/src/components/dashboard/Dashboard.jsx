import React from 'react';
import axios from 'axios';
import Avatar from 'react-avatar';

class Dashboard extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row-1">
          <div class="col-1-2">
            {/* this will be the avatar div */}
            <Avatar src={user.img} size="100" round={true} />
            <h1 class="welcome-row">Welcome {user.name} to Stutor! </h1>
          </div>
          <div class="col-1-2">
            {/* this will be the Pick a School Level div*/}
            <h3 class="school-row">Pick a School Level</h3>
            <form class="button-row">
              <input type="submit" value="Elementryschool" />
              <input type="submit" value="Middleschool" />
              <input type="submit" value="Highschool" />
            </form>
          </div>
        </div>
        <div class="row-2">
          <div class="col-1">
            {/* this is the My Tutor div */}
            <h3 class="tutor-title">My Tutors</h3>
            <div>
              <Avatar src={tutor.img} size="25" round={true} />
              <p class="tutor-row">{mappedTutor.name}</p>
              <form>
                <input type="submit" value="Message!" />
                <input type="submit" value="Delete" />
              </form>
            </div>
          </div>
          <div class="col-2">
            {/* this is the Meassage component div */}
            <h3 class="message-title">Messages</h3>
            <p class="message-row">{mappedMessage.info}</p>
            <form class="message-button">
              <input type="submit" value="Message" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;