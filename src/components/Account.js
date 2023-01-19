import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
    const { user, logout } = UserAuth();
    const navigate = useHistory();
  
    const handleLogout = async () => {
      try {
        await logout();
        navigate.push('/');
        console.log('You are logged out')
      } catch (e) {
        console.log(e.message);
      }
    };
    useEffect(() => {
        document.title = "Member Access"
     }, []);
    return (
        <div>
            <h1>Account Details</h1>
            <p>Logged In Email: {user && user.email}</p>
            <p>User Country: {user && user.country}</p>
            <button onClick={handleLogout} className='border px-6 py-2 my-4'>
                Logout
            </button>
        </div>
    );
}

export default Account;