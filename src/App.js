import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoaderLayout from './Layouts/Loader';
import './App.css';

const AboutPage = lazy(() => import('./Pages/AboutPage'));
const FactsPage = lazy(() => import('./Pages/FactsPage'));
const HomePage = lazy(() => import('./Pages/HomePage'));

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Suspense fallback={LoaderLayout}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/facts" element={<FactsPage />} />
        <Route path="/facts?page/:id" element={<FactsPage />} />
        <Route path="/facts/:page/:id" element={<FactsPage />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
