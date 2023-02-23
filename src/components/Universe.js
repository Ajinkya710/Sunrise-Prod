import React from 'react';
import { Link } from 'react-router-dom';
import publicationimg from '../images/publications2.jpg';
import updatesimg from '../images/updates2.jpg';
const Universe = () => {
  return (
    <>
    <div id="universe" className="universe">
      <h1>Updates</h1>
      <p>&nbsp;</p>
      <div className="blocks" style={{ display: 'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
          <Link to="/updates" target='_blank' >
            <img src={updatesimg} alt='updates_img' id='update_img'
              style={{ height: '650px', width: '550px',  borderRadius: '3%' }}></img>
          </Link>
          <Link to="/publications" target='_blank'>
            <img src={publicationimg} alt='publication_img' id='publication_img'
              style={{ height: '650px', width: '550px',  borderRadius: '3%' }}></img>
          </Link>
      </div>
    </div>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <hr style={{width:'75%', margin:'auto', height:'1.5px', background: '#817d7d'}}/>
    </>
  );
}

export default Universe;
