import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'
import App from './App'; 

const StrictApp = () => (
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <StrictApp />);
} else {
  const root = createRoot(rootElement);
  root.render(<StrictApp />);
}