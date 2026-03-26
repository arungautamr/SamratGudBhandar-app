import React from 'react';
import { config } from '../config/env';
import '../styles/footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/SGBlogo2.png" alt="Samrat Gur Bhandar Logo" className="footer-logo" />
            <h3>{config.STORE_NAME}</h3>
            <p>Pure, organic jaggery crafted with traditional methods. Experience authentic gur quality in every package.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: {config.STORE_EMAIL}</p>
            <p>Phone: {config.STORE_PHONE}</p>
            <p>Address: {config.STORE_ADDRESS}</p>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">📷</a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Twitter">𝕏</a>
              <a href={`https://wa.me/${config.STORE_WHATSAPP}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">💬</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 {config.STORE_NAME}. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/returns">Returns & Exchanges</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
