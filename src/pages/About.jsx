import React from 'react';
import { config } from '../config/env';
import '../styles/page.css';

export const About = () => {
  return (
    <main className="page about-page">
      <div className="page-header">
        <h1>About Us</h1>
        <p>Learn about our heritage and commitment to quality</p>
      </div>

      <div className="container">
        <section className="about-section">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              {config.STORE_NAME} has been crafting authentic Indian jaggery for generations. 
              Our commitment to traditional methods and premium quality has made us a trusted name in every household.
            </p>
          </div>
          <div className="about-image">
            <img src="/farm-scene.jpg" alt="Our Farm" />
          </div>
        </section>

        <section className="about-section">
          <div className="about-image">
            <img src="/jaggery-product.jpg" alt="Our Products" />
          </div>
          <div className="about-content">
            <h2>Why Choose Us?</h2>
            <ul className="features-list">
              <li>✓ 100% Pure Organic Jaggery</li>
              <li>✓ No Preservatives or Additives</li>
              <li>✓ Traditional Production Methods</li>
              <li>✓ Lab Tested for Quality</li>
              <li>✓ Fair Trade Practices</li>
              <li>✓ Trusted by Families</li>
            </ul>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Quality</h3>
                <p>We never compromise on the quality of our products.</p>
              </div>
              <div className="value-card">
                <h3>Authenticity</h3>
                <p>Genuine traditional methods passed down through generations.</p>
              </div>
              <div className="value-card">
                <h3>Sustainability</h3>
                <p>Eco-friendly practices that care for our environment.</p>
              </div>
              <div className="value-card">
                <h3>Health</h3>
                <p>Committed to your family's health and wellness.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="factory-gallery-section">
          <div className="about-content">
            <h2>Our Factory & Facility</h2>
            <p>
              From production to packaging, our facility follows traditional methods with care and hygiene to
              deliver pure jaggery products to every customer.
            </p>
          </div>
          <div className="factory-gallery-grid">
            <img src="/factory_gate.jpeg" alt="Samrat Gur Bhandar factory gate" />
            <img src="/factory1.jpeg" alt="Factory packaging area" />
            <img src="/factory2.jpeg" alt="Factory production area" />
          </div>
        </section>
      </div>
    </main>
  );
};
