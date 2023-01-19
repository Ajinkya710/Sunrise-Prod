import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

const twitter = () => {
  return (
    <div id="universe">
    {/* <div className="dining"> */}
        {/* <h1>In Progress</h1> */}
        <a class="twitter-timeline" data-width="500" data-height="800" data-theme="light" href="https://twitter.com/StudySunrise?ref_src=twsrc%5Etfw">Tweets by StudySunrise</a> 
        <Helmet>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </Helmet>
      {/* </div> */}
    </div>
  );
}

export default twitter;
