import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import logo from '../images/sunrise-logo.png';
import headerimg from '../images/CI_Images/CI_header.jpg';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Footer from '../components/Footer'
import Carousel from '../components/Carousel';
import { Header } from '../components/Header'
import '../styles/Updates.css'
const Updates = () => {
  useEffect(() => {
    document.title = "Updates"
  }, []);
  return (
    <>
      <Header />
      <h1 style={{ color: '#494b4d', position: 'fixed', marginTop:'6.8%',textAlign: 'center', width: '100%', paddingTop: '7px', paddingBottom: '7px', background: 'white', borderBottom: '1px solid #828487',zIndex:'10' }}>Updates</h1>
      <div className="updates" >
        <h2>Sunrise Updates</h2>
        <div><Carousel /></div>
        <h2>Social Media Updates</h2>
        <p>&nbsp;</p>
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
        <Footer />
      </div>
    </>
  );
}

export default Updates;
