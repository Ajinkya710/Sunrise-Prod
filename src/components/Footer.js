import React,{ Component } from "react";
import MailIcon from '@mui/icons-material/Mail';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import sunriselogo2 from "../images/sunrise-logo2.png";
import '../styles/App.css'
import MailchimpSubscribe from "react-mailchimp-subscribe";

const SubscribeForm = ({ status, message, onValidated  }) => {
  let email,f_name,l_name;
  const submit = () =>
    email &&
    f_name &&
    l_name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      FNAME: f_name.value,
      LNAME: l_name.value,
      EMAIL: email.value
    });
	console.log(status);
  return (
    <div className='all_footer'>
      <div className='footer'>
        <div id='logo2' style={{backgroundSize: 'cover',backgroundRepeat: 'no-repeat', height: '112px', width:'325px', backgroundImage: `url(${sunriselogo2})`}}></div>
        <div className='form'>
        <div>
		
        {status === "sending" && <div style={{ color: "blue", fontSize:'20px', marginBottom:'3px'}}><strong>sending...</strong></div>}
        {status === "error" && (
            <div
            style={{ color: "red",fontSize:'20px', marginBottom:'3px', fontWeight:'bold'}}
            dangerouslySetInnerHTML={{ __html: message }}
            />
        )}
        {status === "success" && (
            <div
            style={{ color: "green", fontSize:'20px', marginBottom:'3px', fontWeight:'bold' }}
            dangerouslySetInnerHTML={{ __html: message }}
            />
        )}
        <p style={{color:'#81817d', fontSize:'15px', marginBottom:'3px'}}><strong>Name *</strong></p>
        <div className='name'>
        <input
            ref={node => (f_name = node)}
            type="text"
            placeholder="John"
            style={{ height:'40px', width:'200px', fontSize:'15px', borderRadius:'5px', borderStyle:'none', marginBottom:'3px', paddingLeft: '10px'}}
        />      
        <input
            ref={node => (l_name = node)}
            type="text"
            placeholder="Smith"
            style={{ height:'40px', width:'200px', fontSize:'15px', borderRadius:'5px', borderStyle:'none', marginBottom:'3px', paddingLeft: '10px'}}
        /><br/>
        </div>
        <div className='name_label'>
            <p style={{color:'#81817d', fontSize:'15px'}}>First</p>
            <p style={{color:'#81817d', fontSize:'15px'}}>Last</p>
        </div><br/>
        <p style={{color:'#81817d', fontSize:'15px', marginBottom:'3px'}}><strong>Email *</strong></p>
        <input
            ref={node => (email = node)}
            type="email"
            placeholder="email@gmail.com"
            style={{ height:'40px', width:'420px', fontSize:'15px', borderRadius:'5px', borderStyle:'none', paddingLeft: '10px'}}
        /><br/>
        <button style={{marginTop:'20px', padding:'10px',fontSize:'15px', marginLeft:'160px', borderRadius:'5px', borderStyle:'none'}} onClick={submit}>Submit</button>
        </div>
        </div>
        <div className='f_image'>
            <MailIcon style={{color:'#f05f54', marginLeft:'150px', height:'50px', width:'80px'}}/><br/><br/>
            <p>Subscribe to our newsletter</p><br/><br/>
			<div className='footer-social'>
				<a href="https://www.youtube.com/channel/UCUgmfAGHO1qW7HV73vDVSLw" target="_blank" rel="noreferrer">
					<YouTubeIcon style={{color:'rgb(233, 49, 49)', marginLeft:'100px', height:'50px', width:'80px'}}/>
				</a>
				<a href="https://twitter.com/StudySunrise" target="_blank" rel="noreferrer">
					<TwitterIcon style={{color:'rgb(49, 168, 232)', height:'50px', width:'80px'}}/>
				</a>
				<a href="https://www.instagram.com/_sunrise.study/" target="_blank" rel="noreferrer">
					<InstagramIcon style={{color:'rgb(243, 119, 42)', height:'50px', width:'80px'}}/>
				</a>
			</div>
        </div>
        </div>
        <div className='copyrights'>
          <p>Copyright © 2020 SUNRISE. All rights reserved.</p>
        </div>
    </div>
  );
};

class Footer extends Component {
  render() {
    const url =
      "https://uow.us19.list-manage.com/subscribe/post?u=40bbfe458977dd850742e1967&id=de661fef4d";
    return (
      <div>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <SubscribeForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>
    );
  }
}

export default Footer;
