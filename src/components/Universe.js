import React from 'react';
import { Link } from 'react-router-dom';
import publicationimg from '../images/publications.jpg';
import updatesimg from '../images/updates.jpg';
const Universe = () => {
  return (
    <div id="universe" className="universe">
      <h1>Universe</h1>
      <div className="blocks" style={{ display: 'flex' }}>
        <div className="blk">
          <Link to="/updates" target='_blank' >
            <img src={updatesimg} alt='updates_img' id='update_img'
              style={{ height: '600px', width: '550px', filter: 'brightness(60%)', borderRadius: '3%' }}></img>
          </Link>
        </div>
        <div className="blk">
          <Link to="/publications" target='_blank'>
            <img src={publicationimg} alt='publication_img' id='publication_img'
              style={{ height: '600px', width: '550px', filter: 'brightness(60%)', borderRadius: '3%' }}></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;
