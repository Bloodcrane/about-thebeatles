import React from "react";
import { Suspense, lazy } from 'react';
import ReactDOM from "react-dom/client";
import "./App.css";

import LoaderLayout from './Layouts/Loader';

import { HashRouter, Routes, Route } from "react-router-dom";
const AboutPage = lazy(() => import('./Pages/AboutPage.jsx'));
const FactsPage = lazy(() => import('./Pages/FactsPage.jsx'));
const HomePage = lazy(() => import('./Pages/HomePage.jsx'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Suspense fallback={LoaderLayout}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/facts" element={<FactsPage />} />
          <Route path="/facts?page/:id" element={<FactsPage />} />
          <Route path="/facts/:page/:id" element={<FactsPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);