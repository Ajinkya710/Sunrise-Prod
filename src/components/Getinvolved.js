import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/sunrise-logo.png";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import headerimg from "../images/Getinvolved/header.jpg";
import methodimg from "../images/Getinvolved/methods.jpg";
import samplingimg from "../images/Getinvolved/sampling.jpg";
import measuresimg from "../images/Getinvolved/measures.jpg";
import trainingimg from "../images/Getinvolved/training.jpg";
import Footer from '../components/Footer'
import './Getinvolved.css'
// import ReactGA from 'react-ga';
// ReactGA.initialize('UA-247673740-1');

const Getinvolved = () => {
  // ReactGA.pageview(window.location.pathname + window.location.search);
  useEffect(() => {
    document.title = "Get Involved"
  }, []);
  return (
    <>
      <div className="getinvolved" >
        <img id='headerimg' src={headerimg} alt="headerimg" />
        <div className='getinvolvedheadernav'>
          <div>
            <Link to="/">
              <img id='logo' src={logo} height="120px" width="330px" alt="Sunrise" />
            </Link>
          </div>
          <div>
            <h1 style={{color:'#fff'}}>Get Involved</h1>
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
        <div className='info'>
          <p>The SUNRISE study fosters an international community of researchers interested in early childhood movement behaviours.</p><br />
          <p><strong>Interested in taking part?</strong> Please read the information below, then contact the Coordinating Centre to discuss your
            participation at
            <a href='mailto:sunrise-uowcentre@uow.edu.au'> sunrise-uowcentre@uow.edu.au</a></p><br />
          <p>Below, you will find details about what’s involved should you wish to take part in the SUNRISE study.</p>
        </div><br />
        <section1 className='section'>
          <div className='method'>
            <div>
              <h2>Methods</h2>
              <p>The SUNRISE study commenced as an international cross-sectional study.
                The SUNRISE study has a focus on developing countries undergoing a period of rapid urbanisation, with countries involved from each of
                the four levels of the United Nations HDI (Low, Middle, High, Very High). We expect an over-representation from Asia and Africa,
                where 90% of the anticipated increase in the global urban population will occur in the next 30 years (United Nations, 2014).</p>
            </div>
            <div>
              <img src={methodimg} alt='method_img'></img>
              <p style={{ textAlign: 'center', paddingTop: '2px' }}>Preschool in China</p>
            </div>
          </div>
        </section1>
        <section2>
          <div className='sampling'>
            <div>
              <img src={samplingimg} alt='sampling_img'></img>
              <p style={{ textAlign: 'center', paddingTop: '2px' }}>Preschool in South Africa</p>
            </div>
            <div>
              <h2>Recruitment and Sampling</h2>
              <p>Each country will need to complete a <strong>pilot</strong> study involving 100 children (50 each from an urban and rural setting) prior to participating
                in the main study. For the <strong>main</strong> SUNRISE study, each country will recruit children, equally from urban and rural settings. The Coordinating
                Centre team can assist you with sample size calculations for the main study. These children will be recruited through early childhood
                education (childcare) settings if possible, or other settings depending on what is best suited for each country.</p><br />
              <p>The sampling frame for each country will comprise a geographical area within reasonable travel distance from the chief investigators
                (CIs) institution. If recruitment is conducted through childcare centres, then the primary sampling unit will be the childcare centre.
                The maximum number of children who can be recruited from any one centre will be advised.  In each country, the sample will be stratified
                by urban/rural location and by indicators of socio-economic status to maximize variability within countries (Katzmarzyk et al., 2013).</p>
            </div>
          </div>
        </section2>
        <section3>
          <div className='measures'>
            <div>
              <h2>Measures</h2>
              <p>Twenty-four hour movement behaviours (physical activity, sedentary time, and sleep) will be assessed using accelerometry. The budget for
                the study includes a limited pool of accelerometers that will be used across countries. Staff in each country will be trained in how to
                use accelerometers to measure movement behaviours in this age group. Children will be asked to wear an accelerometer continuously
                (including sleeping) for a minimum of five days. Parents/carers will report their child’s use of electronic media, sleep quality, and
                restrained sedentary time. Sociodemographic data will be collected from parents/carers using a modified version of the WHO STEPS Survey.</p><br />
              <p>Current secondary outcomes and instruments include</p><br />
              <ul>
                <li>
                  Height and weight (used to calculate BMI) – measured using standardised procedures (as per WHO protocols),
                </li><br />
                <li>
                  Executive Function  – <a href='http://www.eytoolbox.com.au/' target='_blank' rel="noopener noreferrer">Early Years Toolbox</a> translated into various languages, and
                </li><br />
                <li>
                  Various established motor skills assessments.
                </li><br />
                <p>The Chief Investigator from each country will be mentored through the research process by a Leadership Group member.</p>
              </ul>
            </div>
            <div>
              <img src={measuresimg} alt='measures_img'></img>
              <p style={{ textAlign: 'center', paddingTop: '2px' }}>Data Collection in Papua New Guinea</p>
            </div>
          </div>
        </section3>
        <section4>
          <div className='issues'>
            <h2>Ethical Issues</h2>
            <p>The overarching protocol for the pilot study has been approved by the University of Wollongong Human Research Ethics Committee.
              The protocol for each country needs to be approved by the ethics committees at the participating institutions of each Chief
              Investigator. Approval will also be sought from any relevant government departments or organisations who oversee relevant settings
              in different countries. Participant information sheets, consent forms, and questionnaires will be translated and back translated, as
              necessary, into the local language of each country following approved procedures of the local institutions.</p>
          </div>
        </section4>
        <section5>
          <div className='quality'>
            <h3>Quality Assurance of data collection, storage and management</h3><br />
            <p>This important component of the project will be conducted by the Australian Health Services Research Institute (AHSRI) at the University
              of Wollongong. Principal Investigator Okely has worked successfully with AHSRI researchers over the past 10 years. AHSRI staff have
              extensive experience and expertise in quality assurance and in working with large data sets commensurate with the anticipated size of
              this project. Comprehensive data guidelines that set out the principles and protocols governing the management, access, use and
              dissemination of the data will be developed. AHSRI will ensure these guidelines are prepared for this project.  AHSRI will develop
              a Data Quality Assurance Plan that describes in detail the methods and procedures to be followed.</p>
          </div>
        </section5>
        <section6>
          <div className='agreement'>
            <h3>Collaboration Agreement</h3><br />
            <p>SUNRISE has a Collaboration Agreement that covers Intellectual Property issues, Data Use, Confidentiality, Privacy, Equipment Loan, and
              the roles and responsibilities of each party. The Agreement is to be reviewed by each country’s Legal representative, and executed by
              both the participating country’s authorised representative and the UOW authorised representative, prior to training in each country.
              There is a separate agreement for the Pilot and Main studies.</p><br />
            <p>An Appendix to the SUNRISE Collaboration Agreement is the Publication Policy. This outlines the request for data, authorship, review of
              publications, and data usage for both individual country and collective data for the Pilot and Main studies. The Publication Policy
              includes a data request form.</p>
          </div>
        </section6>
        <section7>
          <div className='training'>
            <div>
              <h2>Training of Personnel</h2>
              <p>Training sessions organised for all country Chief Investigators and key staff will be conducted by the Coordinating Centre
                (Early Start, University of Wollongong) in advance of data collection in each country. All staff will be certified by trained experts
                as competent to make the required measurements, which will involve the completion of on-line training modules, viewing protocol videos,
                and successfully completing on-line exams prior to the hands-on training sessions and one-on-one training by experts.</p>
            </div>
            <div>
              <img src={trainingimg} alt='training_img'></img>
              <p style={{ textAlign: 'center', paddingTop: '2px' }}>Early Years Toolbox app </p>
            </div>
          </div>
        </section7>
        <section8>
          <div className='budget'>
            <h2>Budget</h2>
            <p>Chief Investigators in each country are asked to identify potential funding sources in their own country and to prepare applications
              for funding under the mentorship of the Leadership Group.</p>
          </div>
        </section8>
        <reference>
          <div className='references'>
            <h2>References</h2>
            <ul>
              <li>Cliff DP, McNeill J, Howard S, et al. Adherence to 24-Hour Movement Guidelines for the Early Years (ages 0-4) and associations with
                social cognitive development among pre-school children from Wollongong, Australia  BMC Public Health. 2017; in press.</li><br />
              <li>Katzmarzyk PT, Barreira TV, Broyles ST, et al. The international study of childhood obesity, lifestyle and the environment (ISCOLE):
                Design and methods. BMC Public Health. 2013; 13(1):900.</li><br />
              <li>United Nations. World urbanisation prospects, New York, United Nations; 2014,</li>
            </ul>
          </div>
        </reference>
      </div>
      <Footer />
    </>
  );
}

export default Getinvolved;
