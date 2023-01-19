import React from 'react';
import { Link } from 'react-router-dom';
import publicationimg from '../images/publications.jpg';
import updatesimg from '../images/updates.jpg';
const Universe = () => {
  return (
    <div id="universe" className="universe">
        <h1>Universe</h1>
        <div className="blocks">
          <div className="blk">
            {/* <img src={updatesimg} alt='updates_img' id='update_img'
            style={{height:'700px', width:'600px',filter: 'brightness(60%)', borderRadius:'3%'}}></img> */}
            <Link to="/updates" target='_blank' style={{color:'black', textDecoration: 'none'}}>
              Updates
            </Link>
          </div>
          <div className="blk">
            {/* <img src={publicationimg} alt='publication_img' id='publication_img'
            style={{height:'700px', width:'600px',filter: 'brightness(60%)',borderRadius:'3%' }}></img> */}
            <Link to="/publications" target='_blank' style={{color:'black', textDecoration: 'none', marginLeft:'100px'}}>
              Publications
            </Link>
          </div>
        </div>
    </div>
  );
}

export default Universe;
