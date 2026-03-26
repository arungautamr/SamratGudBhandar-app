import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useTheme } from '../hooks/useTheme';
import { config } from '../config/env';
import '../styles/header.css';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useCart();
  const { theme, toggleTheme } = useTheme();

  const cartItemsCount = cart.length;

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src="/SGBlogo2.png" alt="Samrat Gur Bhandar Logo" className="logo-icon" />
            <span className="logo-text">{config.STORE_NAME}</span>
          </Link>

          {/* Navigation */}
          <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            {/* <Link to="/cart" className="cart-icon">
              <span className="cart-icon-svg">🛒</span>
              {cartItemsCount > 0 && (
                <span className="cart-badge">{cartItemsCount}</span>
              )}
            </Link> */}

            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
