import React from "react";
import Login from "./Login";
import "./CSS/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="card">
        <div className="card-content">
          <h1>Welcome to My App</h1>
          <p>This is a testing ground for Auth0 and Microsoft Identity.</p>
          <Login />
        </div>
      </div>
    </div>
  );
}
