import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your Tailwind styles
import App from './app'; // Import the main App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
