import React from 'react';  
import ReactDOM from 'react-dom';
// import PrivateRoute from './components/PrivateRoute'
import App from './App';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Getinvolved from './components/Getinvolved'
import Updates from './components/Updates'
import Chiefinvestigators from './components/ChiefInvestigator'
import Login from './components/LoginForm'
import Publications from './components/Publications'
import ReactGA from 'react-ga4';
import MemberAccess from './components/MemberSection';
import SignUp from './components/Signup';
import { AuthContextProvider } from './context/AuthContext';
ReactGA.initialize('G-TNL0HZPW9P');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
    <AuthContextProvider>
      <Routes>
        <Route path="/getinvolved">
          <Getinvolved/>
        </Route>
        <Route path="/chiefinvestigators">
          <Chiefinvestigators />
        </Route>
        <Route path="/updates">
          <Updates/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
        {/* <Route path="/memberaccess" element={<PrivateRoute />}>
            <Route path="" element={<MemberAccess />} />
          </Route> */}
        <Route path="/memberaccess">
          <MemberAccess/>
        </Route>
        <Route path="/publications">
          <Publications />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Routes>
      </AuthContextProvider>
    </React.StrictMode>
  </Router>
);

