import React , { useEffect , useState } from "react";
import { Link, useNavigate  } from 'react-router-dom';
import {Header} from './Header';
import { UserAuth } from '../context/AuthContext';
import '../styles/LoginForm.css'
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
  
        <div className='loginheadernav'>
          <Header/>
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