import React , { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/sunrise-logo.png';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import headerimg from '../images/CI_Images/CI_header.jpg';
import './ChiefInvestigators.css';
import Footer from '../components/Footer';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBCol
} from 'mdb-react-ui-kit';
const flags = importAll(require.context('../images/Flags', false, /\.(png)$/));

function importAll(r) {
    let flags = {};
    r.keys().map((item, index) => { flags[item.replace('./', '')] = r(item); });
    return flags;
  }

const ci_images = importImages(require.context('../images/CI_Images', false, /\.(png|jpe?g|svg)$/));

function importImages(r) {
      let ci_images = {};
      r.keys().map((item, index) => { ci_images[item.replace('./', '')] = r(item); });
      return ci_images;
    }

let ci_data = [
    { 
      ci_country: 'Australia',
      ci_flag: flags['au.png'],
      ci_name: 'Snr Prof. Tony Okely',
      ci_university: 'University Of Wollongong',
      ci_email: 'tokely@uow.edu.au',
      ci_image: ci_images['Tony-Okely_opt.jpg']
    },
    { 
      ci_country: 'Bangladesh',
      ci_flag: flags['bd.png'],
      ci_name: 'Mohammad Sorowar Hossain',
      ci_university: 'Biomedical Research Foundation, Bangladesh',
      ci_email: 'sorowar.hossain@brfbd.org',
      ci_image: ci_images['Mohammad Sorowar Hossain Bangladesh.jpg']
    },
    { 
      ci_country: 'Brazil',
      ci_flag: flags['br.png'],
      ci_name: 'Alex Antonio Florindo',
      ci_university: 'University of Sao Paulo, Brazil',
      ci_email: 'aflorind@usp.br',
      ci_image: ci_images['Alex Antonio Florindo Brazil.jpg']
    },
    { 
      ci_country: 'Botswana',
      ci_flag: flags['bw.png'],
      ci_name: 'Comfort J. Mokgoth',
      ci_university: 'University of Botswana',
      ci_email: 'MOKGOTHU@UB.AC.BW',
      ci_image: ci_images['NoPhoto.jpg']
    },
    { 
      ci_country: 'Canada',
      ci_flag: flags['cn.png'],
      ci_name: 'Mark Tremblay',
      ci_university: 'CHEO Research Institute, Canada',
      ci_email: 'mtremblay@cheo.on.ca',
      ci_image: ci_images['NoPhoto.jpg']
    },
    { 
      ci_country: 'Chile',
      ci_flag: flags['cl.png'],
      ci_name: 'Nicolas Aguilar-Farias',
      ci_university: 'Universidad de La Frontera, Chile',
      ci_email: 'nicolas.aguilar@ufrontera.cl',
      ci_image: ci_images['NoPhoto.jpg']
    },
    { 
      ci_country: 'China',
      ci_flag: flags['ca.png'],
      ci_name: 'Guan Hongyan',
      ci_university: 'Capital Institute of Pediatrics, China',
      ci_email: 'Hongyanguan@126.com',
      ci_image: ci_images['Hongyan Guan China.jpg']
    },
    { 
      ci_country: 'Ethiopia',
      ci_flag: flags['et.png'],
      ci_name: 'Chalchisa Abdeta',
      ci_university: 'HI Ethiopia and University of Wollongong',
      ci_email: 'caaliphysio@gmail.com',
      ci_image: ci_images['Chalchisa Abdeta Tugu Ethiopia.jpg']
    },
    { 
      ci_country: 'Fiji',
      ci_flag: flags['fg.png'],
      ci_name: 'Pragya Singh',
      ci_university: 'Fiji National University, Fiji',
      ci_email: 'pragya.singh@fnu.ac.fj',
      ci_image: ci_images['Pragya Singh Fiji.jpg']
    },
    { 
      ci_country: 'Finland',
      ci_flag: flags['fn.png'],
      ci_name: 'Eva Roos',
      ci_university: 'Folkhälsan Research Center, Finland',
      ci_email: 'Eva.Roos@folkhalsan.fi;',
      ci_image: ci_images['NoPhoto.jpg']
    },
    { 
      ci_country: 'Hong Kong',
      ci_flag: flags['hk.png'],
      ci_name: 'Prof. Amy Ha',
      ci_university: 'The Chinese University of Hong Kong',
      ci_email: 'sauchingha@cuhk.edu.hk',
      ci_image: ci_images['NoPhoto.jpg']
    },
    { 
      ci_country: 'India',
      ci_flag: flags['in.png'],
      ci_name: 'Himangi Lubree',
      ci_university: 'Vadu Rural Health Program & KEM Hospital Research Centre, Pune, India',
      ci_email: 'himangi.lubree@kemhrcvadu.org',
      ci_image: ci_images['Himangi Lubree India.jpg']
    },
    { 
      ci_country: 'Indonesia',
      ci_flag: flags['id.png'],
      ci_name: 'Adang Suherman',
      ci_university: 'Universitas Pendidikan Indonesia',
      ci_email: 'adangsuherman@upi.edu',
      ci_image: ci_images['NoPhoto.jpg']
    },
    { 
      ci_country: 'Iran',
      ci_flag: flags['ir.png'],
      ci_name: 'Najmeh Hamzavi Zarghani',
      ci_university: 'Tarbiat Modares University, Iran',
      ci_email: 'nadjmeh.hamzavi5@yahoo.com',
      ci_image: ci_images['Najmeh Hamzavi Zarghani _ Iran.jpg']
    },
    { 
      ci_country: 'Japan',
      ci_flag: flags['jp.png'],
      ci_name: 'Chiaki Tanaka',
      ci_university: 'Tokyo Kasei Gakuin University, Japan',
      ci_email: 'c.tanaka@kasei-gakuin.ac.jp',
      ci_image: ci_images['Chiaki Tanaka Japan.jpg']
    },
    { 
      ci_country: 'Keyna',
      ci_flag: flags['ky.png'],
      ci_name: 'Amonje Moses Oluchiri',
      ci_university: 'Wellness for Greatness, Kenya',
      ci_email: 'm.oluchiri@wellnessforgreatness.org',
      ci_image: ci_images['MOSES Kenya.jpg']
    },
    { 
      ci_country: 'Korea Republic',
      ci_flag: flags['ko.png'],
      ci_name: 'Dong Hoon Kim',
      ci_university: 'Korean Institute of Child Care and Education',
      ci_email: 'Dhkim@kicce.re.kr',
      ci_image: ci_images['NoPhoto.jpg']
    },
    { 
      ci_country: 'Malawi',
      ci_flag: flags['mw.png'],
      ci_name: 'Tawonga Mwase-Vuma',
      ci_university: 'Centre for Social Research, ci_university of Malawi',
      ci_email: 'taomwase@gmail.com',
      ci_image: ci_images['Tawonga Mwase-Vuma Malawi.png']
    },
    { 
      ci_country: 'Malaysia',
      ci_flag: flags['ms.png'],
      ci_name: 'Denise CL Koh',
      ci_university: 'Universiti Kebangsaan Malaysia',
      ci_email: 'denise.koh@ukm.edu.my',
      ci_image: ci_images['Denise Koh Malaysia.jpg']
    },
    { 
      ci_country: 'Mexico',
      ci_flag: flags['mx.png'],
      ci_name: 'Alejandra Jauregui de la Mota',
      ci_university: 'Colonia Santa María Ahuacatitlan, C. P. 62100, Cuernavaca, Mor. México.',
      ci_email: 'Alejandra.jauregui@insp.mx',
      ci_image: ci_images['Alejandra Jauregui de la Mota_ Mexico.jpg']
    },
    { 
      ci_country: 'Mongolia',
      ci_flag: flags['mn.png'],
      ci_name: 'Bayasgalan Jambaldorj',
      ci_university: '',
      ci_email: 'nom_bayasaa@yahoo.com',
      ci_image: ci_images['NoPhoto.jpg']
    },
    { 
      ci_country: 'Morocco',
      ci_flag: flags['mo.png'],
      ci_name: 'Asmaa El Hamdouchi',
      ci_university: 'National Centre for Energy Sciences and Nuclear Techniques, Morocco',
      ci_email: 'asmaaelhamdouchi@gmail.com',
      ci_image: ci_images['asmaa morocco.jpg']
    },
    { 
      ci_country: 'Nigeria',
      ci_flag: flags['ng.png'],
      ci_name: 'Aoko Oluwayomi',
      ci_university: 'University of Lagos, Nigeria',
      ci_email: 'yomiaoko@gmail.com',
      ci_image: ci_images['Aoko Oluwayomi Nigeria.jpg']
    },
    { 
      ci_country: 'Netherlands',
      ci_flag: flags['nt.png'],
      ci_name: 'Sanne Veldman',
      ci_university: 'Amsterdam UMC, Netherlands',
      ci_email: 's.veldman1@amsterdamumc.nl',
      ci_image: ci_images['Sanne Veldman Netherlands.jpg']
    },
    { 
      ci_country: 'Pakistan',
      ci_flag: flags['pk.png'],
      ci_name: 'Ali Turab',
      ci_university: 'PHC Global, Pakistan',
      ci_email: 'ali@phcglobal.org',
      ci_image: ci_images['Ali Turab Pakistan.jpg']
    },
    { 
      ci_country: 'Papua New Guinea',
      ci_flag: flags['pg.png'],
      ci_name: 'Bang Nguyen Pham',
      ci_university: 'PNG Institute of Medical Research',
      ci_email: 'pnbang2001@yahoo.com',
      ci_image: ci_images['Bang Nguyen Pham PNG.jpg']
    },
    { 
      ci_country: 'Philippines',
      ci_flag: flags['ph.png'],
      ci_name: 'Marites Tiongco',
      ci_university: 'De La Salle University, Philippines',
      ci_email: 'marites.tiongco@dlsu.edu.ph;',
      ci_image: ci_images['Marites Tiongco Philippines.png']
    },
    { 
      ci_country: 'Russia',
      ci_flag: flags['ru.png'],
      ci_name: 'Anna Kontsevaya',
      ci_university: 'Department of Public Health, Russia',
      ci_email: 'koncanna@yandex.ru',
      ci_image: ci_images['Anna Kontsevaya_Russia.jpg']
    },
    { 
      ci_country: 'Scotland',
      ci_flag: flags['scl.png'],
      ci_name: 'John Reilly',
      ci_university: 'University of Strathclyde, Scotland',
      ci_email: 'john.j.reilly@strath.ac.uk',
      ci_image: ci_images['John Reilly Scotland.jpg']
    },
    { 
      ci_country: 'Singapore',
      ci_flag: flags['sg.png'],
      ci_name: 'Michael Chia',
      ci_university: 'National Institute of Education, Singapore',
      ci_email: 'Michael.chia@nie.edu.sg',
      ci_image: ci_images['Michael Chia Singapore (co-CI).jpg']
    },
    { 
      ci_country: 'Singapore',
      ci_flag: flags['sg.png'],
      ci_name: 'Wei-Peng',
      ci_university: '',
      ci_email: '',
      ci_image: ci_images['NoPhoto.jpg']
    },
    { 
      ci_country: 'South Africa',
      ci_flag: flags['sa.png'],
      ci_name: 'Catherine Draper',
      ci_university: 'University of the Witwatersrand, South Africa',
      ci_email: 'pnbang2001@yahoo.com',
      ci_image: ci_images['Catherine Draper South Africa.jpg']
    },
    { 
      ci_country: 'Spain',
      ci_flag: flags['sp.png'],
      ci_name: 'Borja del Pozo Cruz',
      ci_university: 'Australian Catholic University, Australia',
      ci_email: 'Borja.delPozoCruz@acu.edu.au',
      ci_image: ci_images['Borja del Pozo-Cruz Spain.jpg']
    },
    { 
      ci_country: 'Srilanka',
      ci_flag: flags['sr.png'],
      ci_name: 'Pujitha Wickramasinghe',
      ci_university: 'University of Colombo and Lady Ridgeway Hospital, Sri Lanka',
      ci_email: 'pujithaw@yahoo.com',
      ci_image: ci_images['Pujitha Wickramasinghe Sri Lanka.jpg']
    },
    { 
      ci_country: 'Sweden',
      ci_flag: flags['sw.png'],
      ci_name: 'Marie Löf',
      ci_university: 'Linköping University and Karolinska Institutet, Sweden',
      ci_email: 'marie.lof@ki.se',
      ci_image: ci_images['Marie Löf Sweden.jpg']
    },
    { 
      ci_country: 'Tanzania',
      ci_flag: flags['tz.png'],
      ci_name: 'Germana H Leyna',
      ci_university: '',
      ci_email: 'gerryleyna@yahoo.com',
      ci_image: ci_images['NoPhoto.jpg']
    },
    { 
      ci_country: 'Thailand',
      ci_flag: flags['th.png'],
      ci_name: 'Dyah Anantalia Widyastari',
      ci_university: 'Institute for Population and Social Research, Mahidol University',
      ci_email: 'dyah.anantalia@gmail.com',
      ci_image: ci_images['Dyah Anantalia Widyastari-Thailand.jpg']
    },
    { 
      ci_country: 'Thailand',
      ci_flag: flags['th.png'],
      ci_name: 'PIYAWAT KATEWONGSA',
      ci_university: 'Institute for Population and Social Research, Mahidol University.',
      ci_email: '',
      ci_image: ci_images['Piyawat Katewongsa_Thailand.jpg']
    },
    { 
      ci_country: 'United Arab Emirates',
      ci_flag: flags['uae.png'],
      ci_name: 'Boštjan Gomiscek',
      ci_university: 'University of Wollongong Dubai',
      ci_email: 'BostjanGomiscek@uowdubai.ac.ae',
      ci_image: ci_images['NoPhoto.jpg']
    },
    { 
      ci_country: 'United States of America',
      ci_flag: flags['usa.png'],
      ci_name: 'Kip Webster (Augusta)',
      ci_university: 'Augusta University, USA',
      ci_email: 'ewebster@augusta.edu',
      ci_image: ci_images['Kip Webster USA Augusta.jpg']
    },
    { 
      ci_country: 'United States of America',
      ci_flag: flags['usa.png'],
      ci_name: 'Amanda Staiano (Pennington)',
      ci_university: 'LSU\'s Pennington Biomedical Research Centre, USA',
      ci_email: 'Amanda.staiano@pbrc.edu',
      ci_image: ci_images['Amanda Staiano USA Pennington.jpg']
    },
    { 
      ci_country: 'Vietnam',
      ci_flag: flags['vt.png'],
      ci_name: 'Tang Kim Hong',
      ci_university: 'Pham Ngoc Thach University of Medicine, Vietnam',
      ci_email: 'hong.tang@pnt.edu.vn',
      ci_image: ci_images['Hong K Tang Vietnam.jpg']
    },
    { 
      ci_country: 'Zimbabwe',
      ci_flag: flags['zw.png'],
      ci_name: 'Nyaradzai Dangarembizi Munambah',
      ci_university: 'University of Zimbabwe',
      ci_email: 'nyaradzaidangarembizi@yahoo.co.uk',
      ci_image: ci_images['Nyarie Dangarembizi Zimbabwe.jpg']
    },
  ];

const ChiefInvestigator = () => {
  useEffect(() => {
    document.title = "Chief Investigators"
 }, []); 
    return (
      <div className="ci">
        <div className='headernav' style={{justifyContent:'space-between'}}>
          <div>
            <Link to="/">
              <img id='logo' src={logo} height="120px" width="330px" alt="Sunrise" />
            </Link>
          </div>
          <div>
            <h1 style={{color:'#fff'}}>Chief Investigators</h1>
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
        <img id='headerimg' src={headerimg} alt="headerimg" />
        <div className='ci_cards'>
            {ci_data.map((item) => {
                return (
                    <MDBCol>
                        <MDBCard className='h-100'>
                            <MDBCardText style={{ fontSize:'17px', fontWeight:'bold', color:'#f38981'}}>
                                <em>{item.ci_country}</em>
                            </MDBCardText><br/>
                            <MDBCardImage style={{border:'1px solid black', borderRadius: '0%', height: '70px', width: '130px', marginBottom: '10px'}}
                                src={item.ci_flag}
                                alt='{}'
                                position='top'
                            /><br/><br/>
                            <MDBCardImage style={{ objectFit:'cover'}}
                                src={item.ci_image}
                                alt='{}'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle style={{padding: '10px', fontSize:'17px'}}>{item.ci_name}</MDBCardTitle>
                                    <MDBCardText  style={{paddingLeft: '10px',paddingRight: '10px', fontSize:'17px', color:'#f38981'}}>
                                    <em><strong>{item.ci_university}</strong></em>
                                    </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter>
                                <MDBCardText style={{fontSize:'15px',color:'#f38981'}}><br/>
                                <em>{item.ci_email}</em>
                                </MDBCardText>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                );
            })}
        </div>
        <Footer/>
    </div>
    );
  }
  
  export default ChiefInvestigator;