import { useEffect, useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import firebase from '../firebase';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
        console.log("User is present")
      } else {
        setAuthenticated(false);
        console.log("No one is logged in")
        navigate("/login");
      }
    });
  }, [navigate]);

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <Component {...props} />
        ) : (
          null
        )
      }
    />
  );
};

export default PrivateRoute;
