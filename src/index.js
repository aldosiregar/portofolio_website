// react 18

import React from 'react';
import ReactDOM from 'react-dom/client';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import reportWebVitals from "./reportWebVitals";
import MainContent from './component/main content/mainContent';
import IntroContent from './component/main content/introContent';
import ParticlesSettings from "./component/main content/particles";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParticlesSettings />

    <IntroContent />

    <MainContent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();