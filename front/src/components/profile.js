import React from 'react';
import './profile.css';

class Profile extends React.Component {
    render() {
      return <div class="corners">
      <br/>
      <div class="face">
      <h2>About me</h2>
      </div>
      <a href="#" class="photo">
        <he>Me</he>
          <img src="https://previews.dropbox.com/p/thumb/AAy6HMkm9QcBFn1m3Mhs43fEAzBeps8-ing1CsHL_7HbqQ0abOco0i3zCanEL9KpvrPsGy7g3Yp4xVsulEVQLBmy1lxSb5aQbpNFdUnw0BQUF595NwB9GVPqsfAd4O-xGa2JC2SC1Ntq0ww7twaqQNIg62wFLSFiCc9E5CtgdOOunQbZoy9mqOPUE69AYDloB1BdM26LoZdT0Bd2rD6F6LNVqYctRFYG8RtoI0wTMpDwOFogQStbZjnQvSYus3nUEr7hE5Y5563E3O4L2mvhByohyj6JV7caq3Dw2AbuSFS_PeLh0gmDiJCzX_SIpwB9VeH-FCtKWBcumSJbKjz7pqZ1ZJY24IXYP_wpakmMB0K378wVoVbg4QD_Ayh9s4lcC5E5s5EJIl1FxTnjrbeFJQ3Wqm5AmGXitAKZ3TLe4XBSOw/p.jpeg?size=2048x1536&size_mode=3" alt="opps"/>
        <div class="glow-wrap">
          <i class="glow"></i>
        </div>
      </a>
      <div class="content">
      <div class="content__container">
        <p class="content__container__text">
        I'm 
        </p>
        
        <ul class="content__container__list">
          <li class="content__container__list__item">WebDeveloper</li>
          <li class="content__container__list__item">DataScientist</li>
          <li class="content__container__list__item">AndroidDeveloper</li>
          <li class="content__container__list__item">Sketcher</li>
        </ul>
      </div>
    </div>
   </div>
    }
  }

export default Profile;