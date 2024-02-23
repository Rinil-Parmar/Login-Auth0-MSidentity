import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./CSS/login.module.css";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button
      className={styles.loginButton}
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

export default Logout;
