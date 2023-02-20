import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useEffect } from "react";
import {Header} from './Header'
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
      navigate('/memberaccess')
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
    <h1 style={{ color: '#494b4d',marginTop:'6.8%', position: 'fixed', textAlign: 'center', width: '100%', paddingTop: '7px', paddingBottom: '7px', background: 'white', borderBottom: '1px solid #828487' }}>Sign Up</h1>
      <div className="login-form" >
        <div className="form-box solid">
          <form onSubmit={handleSubmit}>
            <h2 className="login-text">Member Access Sign Up</h2>
            <div>
              <label>Email</label>
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
            <button type="submit" value="LOGIN" className="login-btn">Sign Up</button>
            {error ? <label style={{ color: 'red' }}>Email already in use. Please use different Email.</label>
              : null}
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;