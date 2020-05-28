import React from "react";
import logo from "./logo.svg";
import { KeycloakProvider } from "@react-keycloak/web";
import keycloak, { config as keyCloakProps } from "./keycloak";

import "./App.css";

function App() {
  return (
    <KeycloakProvider keycloak={keycloak} {...keyCloakProps}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </KeycloakProvider>
  );
}

export default App;
