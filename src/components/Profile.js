import React , { useEffect , useState } from "react";
import { Link, useHistory  } from 'react-router-dom';
import logo from "../images/sunrise-logo.png";
import headerimg from '../images/CI_Images/CI_header.jpg';
import { UserAuth } from '../context/AuthContext';
import './LoginForm.css'
const Profile = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useHistory();
    const { signIn } = UserAuth();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('')
      try {
        await signIn(email, password)
        navigate.push('/account')
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
        <Link to="/">
          <img id='logo_link' src={logo} height="120px" width="330px" alt="Home" />
        </Link>
        <img id='loginheader' src={headerimg} alt="loginheader" />
            <div className="login-form">
                <div className="form-box solid">
                    <form onSubmit={handleSubmit}>
                    <h2 className="login-text">Update Profile</h2>
                    <div>
                    <label>Display Name</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
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

export default Profile;