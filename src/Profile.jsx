// Profile.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <h2>Welcome, {user.name}</h2>
        <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
      </div>
    )
  );
}

export default Profile;
