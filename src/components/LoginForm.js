import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { UserAuth } from '../context/AuthContext';
import '../styles/LoginForm.css';
import { HashLink as Link } from "react-router-hash-link";

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
      <Header />

      <div className="login-form">
        <h1 style={{ color: '#494b4d', textAlign: 'center', width: '100%' }}>Log In</h1>
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
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label for="checkbox">
                <input type="checkbox" id="checkbox" name="remember" style={{ marginRight: '5px' }} />
                Remember me</label>
              <Link to='/passwordreset' target="_blank" style={{color:'blue', fontSize:'14px', fontWeight:'bold'}}>Forgot Password?
              </Link>
            </div>
            <button type="submit" value="LOGIN" className="login-btn">LOG IN</button><p>&nbsp;</p>
            {error ? <label style={{ color: 'red' }}>Invalid Email/Password. Please verify login details.</label>
              : null}
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;