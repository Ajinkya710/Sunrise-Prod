import React from 'react';  
import ReactDOM from 'react-dom/client';
import PrivateRoute from './components/PrivateRoute'
import App from './App';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Getinvolved from './components/Getinvolved'
import Updates from './components/Updates'
import Chiefinvestigators from './components/ChiefInvestigator'
import Login from './components/LoginForm'
import Publications from './components/Publications'
import ReactGA from 'react-ga4';
import FileTabs from './components/MemberSection';
import SignUp from './components/Signup';
import { AuthContextProvider } from './context/AuthContext';
ReactGA.initialize('G-TNL0HZPW9P');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
    <AuthContextProvider>
      <Routes>
        {/* <PrivateRoute path="/memberaccess" component={MemberAccess}>
        </PrivateRoute> */}
        <Route path="/getinvolved" element={<Getinvolved/>}>
        </Route>
        <Route path="/chiefinvestigators" element={<Chiefinvestigators />}>
        </Route>
        <Route path="/updates" element={<Updates/>}>
        </Route>
        <Route path="/login" element={<Login/>}>
        </Route>
        <Route path="/signup" element={<SignUp/>}>
        </Route>
        {/* <Route path="/memberaccess" element={<PrivateRoute />}>
            <Route path="" element={<MemberAccess />} />
          </Route> */}
        <Route path="/memberaccess" element={<FileTabs/>}>
        </Route>
        <Route path="/publications" element={<Publications />}>
        </Route>
        <Route path="/" element={<App />}>
        </Route>
      </Routes>
      </AuthContextProvider>
    </React.StrictMode>
  </Router>
);
