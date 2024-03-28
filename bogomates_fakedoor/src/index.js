import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './Context/context';
import { Bogoapp } from './bogoapp';
import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga';

//Google tag manager
const tagManagerArgs = {
    gtmId: 'GTM-KKG4KS8N'
}
TagManager.initialize(tagManagerArgs)

//Google Analytics
const TRACKING_ID = "G-GV1R7BSN88"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
  <Bogoapp/>
  </ContextProvider>
);
// 
/* <React.StrictMode>
   <Bogoapp/>
  </React.StrictMode>*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
