import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { UserAuth } from '../context/AuthContext';
import '../styles/LoginForm.css';
import { HashLink as Link } from "react-router-hash-link";
import Alert from '@mui/material/Alert';

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
      setError('No Error')
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
              <label>Email ID</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="username"
                className="login-box"
                required
              /></div><p>&nbsp;</p>
            <div>
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                className="login-box"
                required
              /></div><p>&nbsp;</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label for="checkbox">
                <input type="checkbox" id="checkbox" name="remember" style={{ marginRight: '5px' }} />
                Remember me</label>
              <Link to='/passwordreset' target="_blank" style={{ color: 'blue', fontSize: '14px', fontWeight: 'bold' }}>Forgot Password?
              </Link>
            </div>
            <button type="submit" value="LOGIN" className="login-btn">LOG IN</button>
            {error === '' ? <p></p> :
              error !== 'No Error' ?
                error.includes('auth/user-not-found') ?
                  <Alert variant="filled" severity="error" sx={{ width: '100%', margin: 'auto' }}>
                    Error! Email not found.
                  </Alert> :
                  <Alert variant="filled" severity="error" sx={{ width: '100%', margin: 'auto' }}>
                    Error! Invalid Password. Please try again.
                  </Alert>
                :
                <Alert variant="filled" severity="success" sx={{ width: '100%', margin: 'auto' }}>
                  Login successful.
                </Alert>
            }
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;