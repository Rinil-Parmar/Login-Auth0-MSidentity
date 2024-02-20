import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      navigation("/profile");
    }
  }, [isAuthenticated, navigation]);

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <div>
      <button className={styles.loginButton} onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
};

export default Login;
