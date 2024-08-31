import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Lazy load components
const Navbar = lazy(() => import('./components/Navbar'));
const Banner = lazy(() => import('./components/Banner'));
const Kids = lazy(() => import('./components/Kids'));
const Mens = lazy(() => import('./components/Mens'));
const Women = lazy(() => import('./components/Womens'));
const Product = lazy(() => import('./components/Product'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="App">
      {/* Wrap Navbar with Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>

      <Routes>
        {/* Wrap Route components with Suspense */}
        <Route 
          path="/" 
          element={
            <Suspense fallback={<div>Loading Banner...</div>}>
              <Banner />
            </Suspense>
          } 
        />
        <Route 
          path="/women" 
          element={
            <Suspense fallback={<div>Loading Women...</div>}>
              <Women />
            </Suspense>
          } 
        />
        <Route 
          path="/men" 
          element={
            <Suspense fallback={<div>Loading Men...</div>}>
              <Mens />
            </Suspense>
          } 
        />
        <Route 
          path="/kids" 
          element={
            <Suspense fallback={<div>Loading Kids...</div>}>
              <Kids />
            </Suspense>
          } 
        />
        <Route 
          path="/products" 
          element={
            <Suspense fallback={<div>Loading Products...</div>}>
              <Product />
            </Suspense>
          } 
        />
        <Route 
          path="/footer" 
          element={
            <Suspense fallback={<div>Loading Footer...</div>}>
              <Footer />
            </Suspense>
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
