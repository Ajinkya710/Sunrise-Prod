import React , { useEffect , useState } from "react";
import { Link, useNavigate  } from 'react-router-dom';
import logo from "../images/sunrise-logo.png";
import headerimg from '../images/CI_Images/CI_header.jpg';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { UserAuth } from '../context/AuthContext';
import '../css/LoginForm.css'
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('')
      try {
        await signIn(email, password)
        navigate('/memberaccess')
      } catch (e) {
        setError(e.message)
        console.log(e.message)
      }
    };
    useEffect(() => {
        document.title = "Sunrise Login"
     }, []);
    return (
        <>
        {/* <img id='headerimg' src={headerimg} alt="headerimg" /> */}
        <img id='loginheader' src={headerimg} alt="loginheader" />
        <div className='loginheadernav'>
          <div>
            <Link to="/">
              <img id='logo' src={logo} height="120px" width="330px" alt="Sunrise" />
            </Link>
          </div>
          <div>
            <h1 style={{color:'#fff'}}>Login</h1>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCUgmfAGHO1qW7HV73vDVSLw" target="_blank" rel="noreferrer">
              <YouTubeIcon style={{ color: 'rgb(233, 49, 49)', height: '50px', width: '80px' }} />
            </a>
            <a href="https://twitter.com/StudySunrise" target="_blank" rel="noreferrer">
              <TwitterIcon style={{ color: 'rgb(49, 168, 232)', height: '50px', width: '80px' }} />
            </a>
            <a href="https://www.instagram.com/_sunrise.study/" target="_blank" rel="noreferrer">
              <InstagramIcon style={{ color: 'rgb(243, 119, 42)', height: '50px', width: '80px' }} />
            </a>
          </div>
        </div>
            <div className="login-form">
                <div className="form-box solid">
                    <form onSubmit={handleSubmit}>
                    <h2 className="login-text">Member Access</h2>
                    <div>
                    <label>Username</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="username"
                        className="login-box"
                        required 
                    /></div>
                    <div>
                    <label>Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        className="login-box" 
                        required
                    /></div>
                    <input type="checkbox" id="checkbox" name="remember" />
                    <label for="checkbox"> Remember me</label>
                    <button type="submit" value="LOGIN" className="login-btn">LOG IN</button>
                    {error? <label style={{color:'red'}}>Invalid Email/Password. Please verify login details.</label>
                    :null}
                    </form>
                </div>
            </div>
        </>
    );
} 

export default LoginForm;