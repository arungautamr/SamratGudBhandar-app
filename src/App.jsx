import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/Home';
import { ProductsPage } from './pages/Products';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { validateEnv } from './config/env';
import './App.css';

function AppContent() {
  useEffect(() => {
    validateEnv();
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <main className="page not-found-page">
                  <div className="container">
                    <h1>404 - Page Not Found</h1>
                    <p>The page you're looking for doesn't exist.</p>
                    <a href="/" className="btn btn-primary">
                      Go Home
                    </a>
                  </div>
                </main>
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <AppContent />
    </RecoilRoot>
  );
}
