import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/sunrise-logo.png';
import headerimg from '../images/CI_Images/CI_header.jpg';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Footer from '../components/Footer'
import './Publications.css';

const Publications = () => {
  useEffect(() => {
    document.title = "Publications"
  }, []);
  return (
    <>
      <div className="publications" style={{ backgroundColor: '#817d7d27' }}>
        <img id='headerimg' src={headerimg} alt="headerimg" />
        <div className='getinvolvedheadernav'>
          <div>
            <Link to="/">
              <img id='logo' src={logo} height="120px" width="330px" alt="Sunrise" />
            </Link>
          </div>
          <div>
            <h1 style={{color:'#fff'}}>Publications</h1>
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
        <div className="all_links">
          <div className='pub_item'>
            <h2><a style={{ textDecoration: 'none' }} href='https://bmcpediatr.biomedcentral.com/articles/10.1186/s12887-020-1969-6' target='_blank' rel="noopener noreferrer"> Proportion of kindergarten
              children meeting the WHO guidelines on physical activity, sedentary behaviour and sleep and
              associations with adiposity in urban Beijing.</a></h2>
            <p>H Guan; Z Zhang; B Wang; A Okely; M Tong; J Wu; T Zhang</p>
          </div>
          <div className='pub_item'>
            <h2>SUNRISE International Surveillance Study of Movement Behaviours in the Early Years: Preliminary
              24-Hour Movement Behaviour Results from the Canadian Pilot. International Society for Behavioral
              Nutrition and Physical Activity Congress 2019 (Prague, Czech Republic), June, 2019.</h2>
            <p>Poster presentation: E Turner; SJ Carson; MD Guerrero; ML Forse; MS Tremblay</p>
          </div>
          <div className='pub_item'>
            <h2> SUNRISE International Surveillance Study of Movement Behaviours in the Early Years: 24-hour movement behaviour
              results from the Canadian pilot. Canadian Society for Exercise Physiology Scientific Conference (Kelowna),
              November, 2019.</h2>
            <p>E Turner; SJ Carson; MD Guerrero; ML Forse; MS Tremblay</p>
          </div>
          <div className='pub_item'>
            <h2><a style={{ textDecoration: 'none' }} href='https://journals.assaf.org.za/index.php/sajsm/article/view/8415' target='_blank' rel="noopener noreferrer"> Understanding
              the influence of 24-hour movement behaviours on the health and development of preschool children from
              low-income South African settings: the SUNRISE pilot study</a></h2>
            <p>C Draper; SA Tomaz; SS Jugdav; C Ramsammy; Sahba B; A van Heerden; K Vilakazi; K Cockroft; SJ Howard; AD Okely</p>
          </div>
          <div className='pub_item'>
            <h2><a style={{ textDecoration: 'none' }} href='https://www.mdpi.com/1660-4601/17/22/8491' target='_blank' rel="noopener noreferrer">
              International Study of Movement Behaviors in the Early Years (SUNRISE): Results from SUNRISE
              Sweden’s Pilot and COVID-19 Study.</a></h2>
            <p>CD Nystrom; C Alexandrou; M Henstrom; E Nilsson; AD Okely; SW El Masri; M Lof</p>
          </div>
          <div className='pub_item'>
            <h2><a style={{ textDecoration: 'none' }} href='https://pilotfeasibilitystudies.biomedcentral.com/articles/10.1186/s40814-021-00912-1' target='_blank' rel="noopener noreferrer">
              International study of 24-h movement behaviors of early years (SUNRISE): a pilot study from Bangladesh.
            </a></h2>
            <p>MS Hossain; IM Deeba; M Hasan; KE Kariippanon; KH Chong; PL Cross; S Ferdous; AD Okely</p>
          </div>
          <div className='pub_item'>
            <h2><a style={{ textDecoration: 'none' }} href='https://journals.assaf.org.za/index.php/sajsm/article/view/10864' target='_blank' rel="noopener noreferrer">
              24 hour movement behaviours and the health and development of pre-school children from Zimbabwean
              settings : the SUNRISE pilot study. </a></h2>
            <p>N Munambah; P Gretschel; FC Muchirahondo; M Chiwaridzo; TM Chikwanha; KE Kariippanon;  KH Chong; PL Cross; C Draper; AD Okely</p>
          </div>
          <div className='pub_item'>
            <h2><a style={{ textDecoration: 'none' }} href='https://bmjopen.bmj.com/content/11/10/e049267' target='_blank' rel="noopener noreferrer">
              Cross-sectional examination of 24-hour movement behaviours among 3- and 4-year-old children in urban and
              rural settings in low-income, middle-income and high-income countries: the SUNRISE study protocol. </a></h2>
            <p></p>
          </div>
          <div className='pub_item'>
            <h2><a style={{ textDecoration: 'none' }} href='https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10852-3' target='_blank' rel="noopener noreferrer">
              Global effect of COVID-19 pandemic on physical activity, sedentary behaviour and sleep among 3- to
              5-year-old children: a longitudinal study of 14 countries. </a></h2>
            <p></p>
          </div>
          <div className='pub_item'>
            <h2><a style={{ textDecoration: 'none' }} href='https://journals.lww.com/acsm-msse/Abstract/9000/Levels_and_Correlates_of_Objectively_Measured.95866.aspx' target='_blank' rel="noopener noreferrer">
              Levels and Correlates of Objectively Measured Sedentary Behaviour in Young Children: SUNRISE Study
              Results from 19 Countries. </a></h2>
            <p></p>
          </div>
          <div className='pub_item'>
            <h2><a style={{ textDecoration: 'none' }} href='https://www.mdpi.com/1660-4601/18/22/11907' target='_blank' rel="noopener noreferrer">
              The Impact of COVID-19 on Preschool-Aged Children's Movement Behaviors in Hong Kong: A Longitudinal
              Analysis of Accelerometer-Measured Data. </a></h2>
            <p>Johan YY Ng; Q He; KH Chong; AD Okely; CH S Chan; AS Ha</p>
          </div>
          <div className='pub_item'>
            <h2><a style={{ textDecoration: 'none' }} href='https://link.springer.com/article/10.1007/s12098-021-03895-2' target='_blank' rel="noopener noreferrer">
              Prevalence of Physical Activity, Screen Time, and Sleep, and Associations with Adiposity and Motor
              Development among Preschool-Age Children in Vietnam: The SUNRISE Vietnam Pilot Study. </a></h2>
            <p>TV Kim; TN D Pham; TT D Nguyen; AD Okely; HK Tang</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Publications;
