import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { LoaderProvider } from "./contexts/loader-context.jsx";
import { NavProvider } from "./contexts/nav-context.jsx";
import { ScrollToTop } from "./Components/ScrollToTop.jsx";
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <NavProvider>
        <LoaderProvider>
            <App />
        </LoaderProvider>
      </NavProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
