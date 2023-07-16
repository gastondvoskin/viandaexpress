import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import axios from "axios";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

/* The following line should not be changed. It defines which API will be called */
axios.defaults.baseURL = import.meta.env.VITE_API_BASEURL || "http://localhost:3001"; 

const onRedirectCallback = (appState) => {
  // Replace 'https://example.com/logout' with your desired logout redirect URL
  window.location.href = 'https://viandaexpress-git-viewer-gastondvoskin.vercel.app/';
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      onRedirectCallback={onRedirectCallback}
      authorizationParams={{
        /* redirect_uri: window.location.origin, */
        redirect_uri: 'https://viandaexpress-git-viewer-gastondvoskin.vercel.app/'
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </Provider>
);
