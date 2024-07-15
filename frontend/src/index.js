import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './styles.css'; // Import your styles
import {domain} from '../src/utils'
import { clientId } from '../src/utils';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);