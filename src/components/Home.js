import React from 'react';
import '../App.css'
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

} from './Home.styles';
import { AnimatedSocialIcon } from 'react-animated-social-icons'

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
                <p><i>an <b>International Study of Movement Behaviours in the Early Years</b>. Bringing together researchers from low, middle, and high income countries across the
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
                  <AnimatedSocialIcon
                    brandName="youtube"
                    url="https://www.youtube.com/channel/UCUgmfAGHO1qW7HV73vDVSLw"
                    animation="grow"
                    defaultColor="rgb(233, 49, 49)"
                    hoverColor="rgb(233, 49, 49)"
                    width="3em"
                    animationDuration={0.8}
                    style={{ margin: '2em' }}
                  />
                  <p style={{ color: 'rgb(233, 49, 49)' }}>youtube/sunrise international study</p>
                </li>
                <li>
                  <AnimatedSocialIcon
                    brandName="twitter"
                    url="https://twitter.com/StudySunrise"
                    animation="grow"
                    defaultColor="rgb(49, 168, 232)"
                    hoverColor="rgb(49, 168, 232)"
                    width="3em"
                    animationDuration={0.8}
                    style={{ margin: '2em' }}
                  />
                  <p style={{ color: 'rgb(49, 168, 232)' }}>twitter/StudySunrise</p>
                </li>
                <li>
                  <AnimatedSocialIcon
                    brandName="instagram"
                    url="https://www.instagram.com/_sunrise.study/"
                    animation="grow"
                    defaultColor="rgb(243, 119, 42)"
                    hoverColor="rgb(243, 119, 42) "
                    width="3em"
                    animationDuration={0.8}
                    style={{ margin: '2em' }}
                  />
                  <p style={{ color: 'rgb(243, 119, 42)' }}>instagram/_sunrise.study</p>
                </li>
              </ul>
              <img src={followlogo} height="80px" width="260px" alt="followlogo" />
        </div>

      </section>
    </div>
  );
}

export default Home;
