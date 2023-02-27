import React from 'react';
import '../styles/App.css'
import { Button } from '../Globalstyles';
import sunriselogo2 from "../images/sunrise-logo2.png";
import followlogo from "../images/follow.png";
import {
  HomeContent,
  HomeContentText,
  HomeTitle,
  HomeTitleText,
  HomeText,
  HomeBtn,

} from '../styles/Home.styles';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Home = () => {
  return (
    <div className="overlay" id="home">
      <section className="intro">
        <div className="content">
          <HomeContent>
            <HomeContentText>
              <HomeTitle>
                <HomeTitleText>WELCOME TO</HomeTitleText>
                <div id='logo2' style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '12vh', width: '35vh', backgroundImage: `url(${sunriselogo2})` }}></div>
              </HomeTitle>
              <HomeText>
                <p style={{lineHeight:'2.5ch'}}><i>an <b>International Study of Movement Behaviours in the Early Years</b>. Bringing together researchers from low, middle, and high income countries across the
                  globe, the SUNRISE study aims to measure physical activity, sedentary behaviour and sleep for children under the age of 5 years. The SUNRISE
                  Coordinating Centre is based at the University of Wollongong, Australia.</i></p>
              </HomeText>
              <HomeBtn to={'/getinvolved'} target='_blank'>
                <Button primary big bigFont smallRadius>GET INVOLVED!</Button>
              </HomeBtn>
            </HomeContentText>
          </HomeContent>
          <ul className='icons'>
            <li>
            <a href="https://www.youtube.com/channel/UCUgmfAGHO1qW7HV73vDVSLw" target="_blank" rel="noreferrer">
              <YouTubeIcon style={{ color: 'rgb(233, 49, 49)', marginRight:'15px', height: '80px', width: '80px' }} />
            </a> 
            </li>
            <li><a href="https://twitter.com/StudySunrise" target="_blank" rel="noreferrer">
              <TwitterIcon style={{ color: 'rgb(49, 168, 232)', marginRight:'15px', height: '80px', width: '80px' }} />
            </a>
            </li>
            <li>
            <a href="https://www.instagram.com/_sunrise.study/" target="_blank" rel="noreferrer">
              <InstagramIcon style={{ color: 'rgb(243, 119, 42)', marginRight:'15px',height: '80px', width: '80px' }} />
            </a>
            </li>
            <li>
            <a href="mailto:sunrise-uowcentre@uow.edu.au" target="_blank" rel="noreferrer">
              <EmailIcon style={{ color: 'rgb(3, 157, 252)', height: '80px', width: '80px' }} />
            </a>
            </li>
          </ul>
          <img src={followlogo} height="80px" width="260px" alt="followlogo" />
        </div>

      </section>
    </div>
  );
}

export default Home;
