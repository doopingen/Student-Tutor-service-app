import React from 'react';
import axios from 'axios';

class Dashboard extends React.Component {
  render() {
    return (
      <div class="row-1">
        <div class="col-1-2">
          {/* this will be the avatar div */}
          
        </div>
        <div class="col-1-2">
          {/* this will be the Pick a School Level div*/}
        </div>
      </div>
      <div class="row-2">
        <div class="col-1">
          {/* this is the My Tutor div */}
        </div>
        <div class="col-2">
          {/* this is the Meassage component div */}
        </div>
      </div>
    )
  }
}