import React , { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import logo from '../images/sunrise-logo.png';
import headerimg from '../images/CI_Images/CI_header.jpg';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Footer from '../components/Footer'
import './Updates.css'
const Updates = () => {
  useEffect(() => {
    document.title = "Updates"
 }, []);
  return (
    <div className="updates" >
        <img id='updatesheader' src={headerimg} alt="headerimg" />
        <div className='updatesheadernav'>
          <div>
            <Link to="/">
              <img id='logo' src={logo} height="120px" width="330px" alt="Sunrise" />
            </Link>
          </div>
          <div>
            <h1 style={{color:'#fff'}}>Updates</h1>
          </div>
          <div>
            <Link href="https://www.youtube.com/channel/UCUgmfAGHO1qW7HV73vDVSLw" target="_blank">
              <YouTubeIcon style={{ color: 'rgb(233, 49, 49)', height: '50px', width: '80px' }} />
            </Link>
            <Link href="https://twitter.com/StudySunrise" target="_blank">
              <TwitterIcon style={{ color: 'rgb(49, 168, 232)', height: '50px', width: '80px' }} />
            </Link>
            <Link href="https://www.instagram.com/_sunrise.study/" target="_blank">
              <InstagramIcon style={{ color: 'rgb(243, 119, 42)', height: '50px', width: '80px' }} />
            </Link>
          </div>
        </div>
        <div className="social_layout">
          <div className="twit">
            <a class="twitter-timeline" data-width="650" data-height="750" data-theme="light" href="https://twitter.com/StudySunrise?ref_src=twsrc%5Etfw">Tweets by StudySunrise</a> 
            <Helmet>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </Helmet>
          </div>
          <div className="twit2">
            <a class="twitter-timeline" data-width="650" data-height="750" data-theme="light" href="https://twitter.com/StudySunrise?ref_src=twsrc%5Etfw">Tweets by StudySunrise</a> 
            <Helmet>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </Helmet>
          </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Updates;
