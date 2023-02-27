import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Paper } from '@mui/material';
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
      <div className="updates" >
        <h1 style={{ color: '#494b4d', textAlign: 'center', width: '100%' }}>Updates</h1>
        <p>&nbsp;</p>
        <h2>Sunrise Updates</h2>
        <p>&nbsp;</p>
        <Carousel />
        {/* <p>&nbsp;</p> */}
        <h2>Social Media Updates</h2>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <div className="social_layout">
          <div className="twit">
            <a class="twitter-timeline" data-width="650" data-height="870" data-theme="light" href="https://twitter.com/StudySunrise?ref_src=twsrc%5Etfw">Tweets by StudySunrise</a>
            <Helmet>
              <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </Helmet>
          </div>
          <div>
            <Paper elevation={2}>
              <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                <a id='insta' href="https://www.instagram.com/_sunrise.study/" style={{ fontSize: '21px', marginLeft: '15px' }}><strong>Latest posts by _sunrise.study</strong><button id='insta_follow' style={{ marginLeft: '23%', borderRadius: '10rem', padding: '8px', color: 'white', background: 'black' }}><strong>Follow on Instagram</strong></button></a>
              </div>
              <hr />
              <div style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '20px', height: '750px', width: '630px', overflowY: 'scroll' }} >
                <figure data-behold-id="uHoiNK0jcxtkgIetHUmt"></figure>
                <Helmet>
                  <script src="https://w.behold.so/widget.js" type="module"></script>
                </Helmet>
              </div>
              <hr />
              <button style={{ borderRadius: '10rem', padding: '10px', color: 'white', background: '#e86602', fontSize: '15px', marginLeft: '35%', marginTop: '10px', marginBottom: '10px', borderStyle: 'none' }}><strong><a href='https://www.instagram.com/_sunrise.study/' target='_blank' rel='noreferrer'>View more on Instagram</a></strong></button>
            </Paper>
          </div>

        </div>
        <Footer />
      </div>
    </>
  );
}

export default Updates;
