import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/hero.css';

export const Hero = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <section className="hero">
      <div className="hero-image">
        <img src="/hero-jaggery.jpg" alt="Samrat Gur Bhandar Jaggery" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              Samrat Gur Bhandar - Pure, Organic Jaggery
            </h1>
            <p className="hero-subtitle">
              Experience the authentic taste of traditional Indian gur. Made using time-honored methods with zero additives, perfect for your family's health and wellness.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleShopNow}>
                Our Product
              </button>
              <button className="btn btn-secondary" onClick={handleLearnMore}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
