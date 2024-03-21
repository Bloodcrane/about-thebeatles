import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LoaderLayout from './Layouts/Loader';
import './App.css';

const AboutPage = lazy(() => import('./Pages/AboutPage'));
const FactsPage = lazy(() => import('./Pages/FactsPage'));
const HomePage = lazy(() => import('./Pages/HomePage'));

const App = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Suspense fallback={LoaderLayout}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/facts" element={<FactsPage />} />
        <Route path="/facts?page/:id" element={<FactsPage />} />
        <Route path="/facts/:page/:id" element={<FactsPage />} />
      </Routes>
    </Suspense>
  </HashRouter>
);

export default App;
