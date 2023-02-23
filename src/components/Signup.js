import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useEffect } from "react";
import {Header} from './Header';
import '../styles/SignUp.css'
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser( email, password);
      navigate('/login')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  useEffect(() => {
    document.title = "Sunrise Signup"
  }, []);
  return (
    <>
    <Header/>
      <div className="signup-form" >
      <h1 style={{ color: '#494b4d', textAlign: 'center', width: '100%'}}>Sign Up</h1>
      <p>&nbsp;</p>
        <div className="form-box solid">
          <form onSubmit={handleSubmit}>
            <h2 className="signup-text">Member Access Sign Up</h2>
            <div>
              <label>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="username"
                className="signup-box"
                required
              /></div>
            <div>
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                className="signup-box"
                required
              /></div>

            <button type="submit" value="LOGIN" className="signup-btn">Sign Up</button>
            {error ? <label style={{ color: 'red' }}>Email already in use. Please use different Email.</label>
              : null}
          </form>
        </div>
          <p style={{ color:'red', width:'45%', margin:'auto'}}>
        *This is the sign up page for the sunrise website.<p>&nbsp;</p>
        *This is one time use only. <p>&nbsp;</p>
        *Please enter valid email address, the password reset link will be sent to this email ID incase you forget it.<p>&nbsp;</p>
        *You will be redirected to the Login page after you Sign Up.<p>&nbsp;</p>
        *if you already have an account? Go to <a href="/login" style={{color:'green'}}><strong>Login</strong></a>
      </p>
      </div>
    </>
  );
}

export default Signup;