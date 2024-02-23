import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { DOMAIN_NAME } from "../env";
import { CLIENT_ID } from "../env";
const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain={DOMAIN_NAME}
    clientId={CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
