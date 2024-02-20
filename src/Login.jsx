import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./login.module.css";
const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h1>Welcome to My App</h1>
      <button
        className={styles.loginButton}
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
