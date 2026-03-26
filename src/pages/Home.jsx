import React from 'react';
import { Hero } from '../components/Hero';
import { Products } from '../components/Products';
import '../styles/page.css';

export const Home = () => {
  return (
    <main className="home-page">
      <Hero />

      <section className="home-showcase">
        <div className="container">
          <div className="home-showcase-card">
            <div className="home-showcase-content">
              <h2>Explore Our Full Product Range</h2>
              <p>
                Discover our complete collection of pure jaggery products made with traditional craftsmanship and
                trusted quality.
              </p>
            </div>
            <div className="home-showcase-image">
              <img src="/HomeAllProduct.jpg" alt="Samrat Gur Bhandar full product showcase" />
            </div>
          </div>
        </div>
      </section>

      <Products />
    </main>
  );
};
