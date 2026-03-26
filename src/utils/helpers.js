// Helper functions for common operations

export const formatPrice = (price) => {
  if (typeof price === 'string') {
    return price;
  }
  return `₹${price.toFixed(2)}`;
};

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(value);
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone);
};

export const sendWhatsAppMessage = (phoneNumber, message) => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/9193818019?text=${encodedMessage}`;
  window.open(url, '_blank');
};

export const sendEmail = (email, subject, body) => {
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};

export const smoothScroll = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const getImageUrl = (imagePath) => {
  return `${process.env.PUBLIC_URL}${imagePath}`;
};
