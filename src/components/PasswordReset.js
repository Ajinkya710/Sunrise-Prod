import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import SunriseLogo from "../images/sunrise-logo.png";
import { Box } from "@mui/system";
function PasswordReset() {

    const [email, setEmail] = useState('')
    const [error, setError] = useState('');

    const triggerResetEmail = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            setError(error.message);
        } catch (error) {
            setError(error.message);
        }  
    }
    console.log("--->" + error)

    return (
        <>
        <h1 style={{ color: '#494b4d', textAlign: 'center', width: '100%', marginTop: '100px'}}>Reset your Password</h1>
        <p>&nbsp;</p>
        <div style={{textAlign:'center' }}>
            <div className="resetPassword-main" >
                <img src={SunriseLogo} alt="Sunrise Logo" style={{ height: '150px', width: '350px'}} />
                <p>&nbsp;</p>
                <label>Email Address: </label>
                <input style={{ width: '250px', padding:'5px', fontSize:'16px' }}   
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="username"
                    className="login-box"
                    required
                /></div><p>&nbsp;</p>
            <button className="resetBtn" type="button" onClick={triggerResetEmail} style={{padding:'5px'}}>Reset password</button>
            <p>&nbsp;</p>
            {error != null ? <p style={{ color:'red' }}>Error! Email not found.</p> : <p style={{ color:'green' }}>"Success! Reset link has been sent to {email}."</p>
            }

        </div>
        </>
    )
}

export default PasswordReset;