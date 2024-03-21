import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LoaderLayout from './Layouts/Loader';
import './App.css';

const AboutPage = lazy(() => import('./Pages/AboutPage'));
const FactsPage = lazy(() => import('./Pages/FactsPage'));
const HomePage = lazy(() => import('./Pages/HomePage'));
const SingleFactsPage= lazy(() => import('./Pages/SingleFactsPage'));

const App = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Suspense fallback={LoaderLayout}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/facts" element={<FactsPage />} />
        <Route path="/facts/:page" element={<FactsPage />} />
        <Route path="/fact/:title" element={<SingleFactsPage />} />
        <Route path="/fact/:page/:id" element={<SingleFactsPage />} />
      </Routes>
    </Suspense>
  </HashRouter>
);

export default App;
