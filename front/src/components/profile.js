import React from 'react';
import './profile.css';

class Profile extends React.Component {
    render() {
      return <div class="corners">
      <br/>
      <div class="face">
      <h2>About me</h2>
      </div>
      <div id="wrapper">
      <div id="pikachu" class="pokemon"></div>
    </div>
   </div>
    }
  }

export default Profile;