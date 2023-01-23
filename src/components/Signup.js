import logo from "../images/sunrise-logo.png";
import headerimg from '../images/CI_Images/CI_header.jpg';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useEffect } from "react";

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
      <img id='signupheader' src={headerimg} alt="loginheader" style={{filter: 'brightness(30%)', height: '180px', width: '100%'}}/>
      <Link to="/">
        <img id='logo_link' src={logo} height="120px" width="330px" alt="Home" style={{ position: 'absolute', top: '1%', left: '3%' }} />
      </Link>
      <div className="login-form" >
        <div className="form-box solid">
          <form onSubmit={handleSubmit}>
            <h2 className="login-text">Member Access Sign Up</h2>
            {/* <div>
              <label>Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                className="login-box"
                required
              /></div> */}
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