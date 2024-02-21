import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = createRoot(document.getElementById("root"));
// require("dotenv").config();

root.render(
  <Auth0Provider
    domain="dev-twrzck2hag6l1yfu.us.auth0.com"
    clientId="QDwzSKyibURONFRFPCMsrEMQFiwoIWas"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
