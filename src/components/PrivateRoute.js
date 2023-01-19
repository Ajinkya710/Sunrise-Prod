import { useState, useEffect } from "react";
import {React} from 'react'
import { useHistory, Switch } from "react-router-dom";
import axios from 'axios';

const PrivateRoute = () => {
  // state
  const [loading, setLoading] = useState(true);
  // hooks
  const navigate = useHistory();

  // check if user is logged in
  // by making API request or from localStorage
  useEffect(() => {
    const authCheck = async () => {
      const { data } = await axios(`/auth-check`);
      if (!data.ok) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    };
    authCheck();
  }, []);

  return loading ? '' : <Switch />;
};

export default PrivateRoute;