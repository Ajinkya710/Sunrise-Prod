import React, { useState, useEffect } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import SunriseLogo from "../images/sunrise-logo.png";
import Alert from '@mui/material/Alert';
function PasswordReset() {

    const [email, setEmail] = useState('')
    const [error, setError] = useState('');

    useEffect(() => {
        document.title = "Reset Password";
    }, []);

    const triggerResetEmail = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            setError('No Error');
        } catch (error) {
            setError(error.message);
        }
    }
    console.log("--->" + error)

    return (
        <>
            <h1 style={{ color: '#494b4d', textAlign: 'center', width: '100%', marginTop: '100px' }}>Reset your Password</h1>
            <p>&nbsp;</p>
            <div style={{ textAlign: 'center' }}>
                <div className="resetPassword-main" >
                    <img src={SunriseLogo} alt="Sunrise Logo" style={{ height: '150px', width: '350px' }} />
                    <p>&nbsp;</p>
                    <label>Email Address: </label>
                    <input style={{ width: '250px', padding: '5px', fontSize: '16px' }}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="username"
                        className="login-box"
                        required
                    /></div><p>&nbsp;</p>
                <button className="resetBtn" type="button" onClick={triggerResetEmail} style={{ padding: '5px' }}>Reset password</button>
                <p>&nbsp;</p>
                {error === '' ? <p></p> :
                    error !== 'No Error' ?
                        error.includes('auth/too-many-requests') ?
                            <Alert variant="filled" severity="error" sx={{ width: '30%', margin: 'auto' }}>
                                Error! Too many requests. Please try again later.
                            </Alert> :
                            <Alert variant="filled" severity="error" sx={{ width: '30%', margin: 'auto' }}>
                                Error! Invalid email address.
                            </Alert>
                        :
                        <Alert variant="filled" severity="success" sx={{ width: '30%', margin: 'auto' }}>
                            Password reset email sent!
                        </Alert>
                }

            </div>
        </>
    )
}

export default PasswordReset;