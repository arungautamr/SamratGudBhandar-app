import React, { useState } from 'react';
import { config } from '../config/env';
import { sendWhatsAppMessage, validateEmail, validatePhone } from '../utils/helpers';

import { sendContactEmails} from '../utils/emailjs';

import '../styles/page.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }


const emailPayload = {
  name:formData.name,
  email:formData.email,
  phone: formData.phone,
  message:formData.message
}

console.log("pay", emailPayload)
     sendContactEmails(emailPayload)

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

const sendMessageFromWhatsapp=()=>{
  const whatsappMessage = `Hi ${config.ADMIN_NAME},\nMessage:\n\n Thanks`;
    sendWhatsAppMessage(config.STORE_WHATSAPP, whatsappMessage);
}


  return (
    <main className="page contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any inquiries</p>
      </div>

      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            {success && (
              <div className="success-message">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Your name"
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="your@email.com"
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="+91 1234567890"
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  placeholder="Your message..."
                  rows="5"
                />
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary btn-lg">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <h2>Contact Information</h2>
            <div className="contact-info-cards">
              <div className="info-card">
                <h3>📧 Email</h3>
                <p>{config.STORE_EMAIL}</p>
              </div>

              <div className="info-card">
                <h3>📞 Phone</h3>
                <p>{config.STORE_PHONE}</p>
              </div>

              <div className="info-card">
                
                <h3>💬 WhatsApp</h3>
                <p>{config.STORE_PHONE}</p>
                  <button className="btn btn-primary btn-sm" onClick={sendMessageFromWhatsapp}>Connect on Whatsapp</button>
              </div>

              <div className="info-card">
                <h3>📍 Address</h3>
                <p>{config.STORE_ADDRESS}</p>
              </div>
            </div>

            <div className="contact-hours">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
