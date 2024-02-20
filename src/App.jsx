import { Auth0Provider } from "@auth0/auth0-react";
import Login from "./Login";

const auth0Config = {
  domain: "dev-twrzck2hag6l1yfu.us.auth0.com",
  clientId: "QDwzSKyibURONFRFPCMsrEMQFiwoIWas",
  redirectUri: window.location.origin,
};

export default function App() {
  return (
    <Auth0Provider {...auth0Config}>
      <div className="App">
        <Login />
      </div>
    </Auth0Provider>
  );
}