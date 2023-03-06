import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useEffect } from "react";
import { Header } from './Header';
import '../styles/SignUp.css';
import Alert from '@mui/material/Alert';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    if (password !== repassword) {
      console.log('password does not match')
      setError('Passwords do not match');
    }
    else {
      try {
        await createUser(email, password)
        setError('No Error')
        navigate('/')
      } catch (e) {
        setError(e.message)
        console.log(e.message)
      }
    }
  };

  useEffect(() => {
    document.title = "Sunrise Signup"
  }, []);
  return (
    <>
      <Header />
      <div className="signup-form" >
        <h1 style={{ color: '#494b4d', textAlign: 'center', width: '100%' }}>Sign Up</h1>
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
            <div><p>&nbsp;</p>
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                className="signup-box"
                required
              /></div>
            <div><p>&nbsp;</p>
              <label>Retype Password</label>
              <input
                onChange={(e) => setRepassword(e.target.value)}
                type="password"
                name="repassword"
                className="signup-box"
                required
              /></div>

            <button type="submit" value="LOGIN" className="signup-btn">Sign Up</button>
            {error === '' ? <p></p> :
              error === 'Passwords do not match' ?
                <Alert variant="filled" severity="error" sx={{ width: '100%', margin: 'auto' }}>
                  Passwords do not match.
                </Alert> :
                error !== 'No Error' ?
                  error.includes('auth/email-already-in-use') ?
                    <Alert variant="filled" severity="error" sx={{ width: '100%', margin: 'auto' }}>
                      Email already in use. Please use different Email.
                    </Alert> :
                      // error.includes('auth/weak-password') :
                      <Alert variant="filled" severity="error" sx={{ width: '100%', margin: 'auto' }}>
                        Weak password. Please use at least 6 characters.
                      </Alert>
                  : <Alert variant="filled" severity="success" sx={{ width: '100%', margin: 'auto' }}>
                    SignUp successful.
                  </Alert>}
          </form>
        </div>
        <p style={{ color: 'red', width: '45%', margin: 'auto' }}>
          *This is the sign up page for the sunrise website.<p>&nbsp;</p>
          *This is one time use only. <p>&nbsp;</p>
          *Please enter valid email address, the password reset link will be sent to this email ID incase you forget it.<p>&nbsp;</p>
          *Password must be at least 6 characters long. <p>&nbsp;</p>
          *You will be redirected to the Home page after you Sign Up.<p>&nbsp;</p>
          *if you already have an account? Go to <a href="/login" style={{ color: 'green' }}><strong>Login</strong></a>
        </p>
        <p>&nbsp;</p>
      </div>
    </>
  );
}

export default Signup;