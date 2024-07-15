import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './styles.css'; // Import your styles

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-fo41ek88tv2ajne5.us.auth0.com"
    clientId="R2NUD4un176MfxwknFmghPdEo4Flkpo8"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);