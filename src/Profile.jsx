import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";
import "./CSS/Profile.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile-container">
        <div className="card">
          <div className="card-content">
            <h1>Welcome, {user.name}!</h1>
            <div className="profile-info">
              <img src={user.picture} alt={user.name} className="profile-picture" />
              <div className="profile-details">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </div>
            <div className="logout-btn">
              <Logout />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
