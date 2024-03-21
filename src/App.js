import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoaderLayout from './Layouts/Loader.jsx';
import './App.css';

const AboutPage = lazy(() => import('./Pages/AboutPage.jsx'));
const FactsPage = lazy(() => import('./Pages/FactsPage.jsx'));
const HomePage = lazy(() => import('./Pages/HomePage.jsx'));
const SingleFactsPage= lazy(() => import('./Pages/SingleFactsPage.jsx'));

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Suspense fallback={LoaderLayout}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/facts" element={<FactsPage />} />
        <Route path="/facts/:page" element={<FactsPage />} />
        <Route path="/fact/:title" element={<SingleFactsPage />} />
        <Route path="/fact/:page/:id" element={<SingleFactsPage />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
