/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBCol
} from 'mdb-react-ui-kit';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import tonyimage from "../images/teamimages/Tony-Okely.jpg";
import becimage from "../images/teamimages/Bec-Calleia.jpg";
import pennyimage from "../images/teamimages/Penny-Cross.jpg";
import karhauimage from "../images/teamimages/Kar-Hau-Chong.jpg";
import ajinkyaimage from "../images/teamimages/Ajinkya-Buva.jpg";
import claudiaimage from "../images/teamimages/Claudia-Maddren.jpg";

const Team = () => {
  return (
    <div id="meetteam">
      <h1>Meet the Team</h1>
      <h3>The SUNRISE Coordinating Centre team is based at Early Start, University of Wollongong, Australia.</h3>
      <div id="team">
        {/* <MDBRow className='row-cols-1 row-cols-md-3 g-4'> */}
        <MDBCol>
          <MDBCard >
            <MDBCardImage style={{ objectFit: 'cover' }}
              src={tonyimage}
              alt='Snr Prof. Tony Okely'
              position='top'
            />
            <MDBCardBody><br />
              <MDBCardTitle style={{ fontSize: '16px' }}>Snr Prof. Tony Okely</MDBCardTitle><br />
              <MDBCardText style={{ fontSize: '13px' }}>
                Principal Investigator and Executive
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter id='connect'>
              <a href="mailto:tokely@uow.edu.au" target="_blank" rel="noreferrer">
                <EmailIcon />
              </a>
              <a href="https://twitter.com/tonyokely" target="_blank" rel="noreferrer">
                <TwitterIcon />
              </a>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage style={{ objectFit: 'cover' }}
              src={pennyimage}
              alt='Penny Cross'
              position='top'
            />
            <MDBCardBody><br />
              <MDBCardTitle style={{ fontSize: '16px' }}>Penny Cross​</MDBCardTitle><br />
              <MDBCardText style={{ fontSize: '13px' }}>
                Data Management Coordinator
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter id='connect'>
              <a href="https://twitter.com/PennyCross_au" target="_blank" rel="noreferrer">
                <TwitterIcon />
              </a>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage style={{ objectFit: 'cover' }}
              src={becimage}
              alt='Rebecca Calleia'
              position='top'
            />
            <MDBCardBody><br />
              <MDBCardTitle style={{ fontSize: '16px' }}>Rebecca Calleia</MDBCardTitle><br />
              <MDBCardText style={{ fontSize: '13px' }}>
                Research Officer
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter id='connect'>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage style={{ objectFit: 'cover' }}
              src={karhauimage}
              alt='Kar-Hau (John) Chong'
              position='top'
            />
            <MDBCardBody><br />
              <MDBCardTitle style={{ fontSize: '16px' }}>Kar-Hau (John) Chong</MDBCardTitle><br />
              <MDBCardText style={{ fontSize: '13px' }}>
                Programmer/Analyst and Equipment Officer
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter id='connect'>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage style={{ objectFit: 'cover' }}
              src={ajinkyaimage}
              alt='Ajinkya Buva'
              position='top'
            />
            <MDBCardBody><br />
              <MDBCardTitle style={{ fontSize: '16px' }}>Ajinkya Buva</MDBCardTitle><br />
              <MDBCardText style={{ fontSize: '13px' }}>
                Programmer/Analyst
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter id='connect'>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage style={{ objectFit: 'cover' }}
              src={claudiaimage}
              alt='Claudia Maddren'
              position='top'
            />
            <MDBCardBody><br />
              <MDBCardTitle style={{ fontSize: '16px' }}>Claudia Maddren</MDBCardTitle><br />
              <MDBCardText style={{ fontSize: '13px' }}>
                Honours Student
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter id='connect'>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        {/* </MDBRow> */}
      </div>
    </div>
  );
}

export default Team;
