import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/contextProvider.js';
// import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
      </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
