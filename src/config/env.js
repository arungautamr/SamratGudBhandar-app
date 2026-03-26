// Environment configuration
const parseBoolean = (value) => value === 'true';
const parseNumber = (value, fallback = 0) => {
  const parsed = Number(value);
  return Number.isNaN(parsed) ? fallback : parsed;
};

export const config = {
  // Store Information
  ADMIN_NAME: process.env.REACT_APP_ADMIN || '',

  STORE_NAME: process.env.REACT_APP_STORE_NAME || '',
  STORE_EMAIL: process.env.REACT_APP_STORE_EMAIL || '',
  STORE_PHONE: process.env.REACT_APP_STORE_PHONE || '',
  STORE_WHATSAPP: process.env.REACT_APP_STORE_WHATSAPP || '',
  STORE_ADDRESS: process.env.REACT_APP_STORE_ADDRESS || '',

  // API Configuration
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL || '',
  API_TIMEOUT: parseNumber(process.env.REACT_APP_API_TIMEOUT, 0),

  // Feature Flags
  ENABLE_CART: parseBoolean(process.env.REACT_APP_ENABLE_CART),
  ENABLE_WISHLIST: parseBoolean(process.env.REACT_APP_ENABLE_WISHLIST),
  ENABLE_SEARCH: parseBoolean(process.env.REACT_APP_ENABLE_SEARCH),

  // Analytics (optional)
  GOOGLE_ANALYTICS_ID: process.env.REACT_APP_GOOGLE_ANALYTICS_ID,


  // emailjs

 SERVICE_ID : process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
 CONTACT_TEMPLATE_ID : process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID ||'',
 AUTO_REPLY_TEMPLATE_ID : process.env.REACT_APP_EMAILJS_AUTO_REPLY_TEMPLATE_ID ||'',
 PUBLIC_KEY : process.env.REACT_APP_EMAILJS_PUBLIC_KEY ||'',


  // App Info
  APP_VERSION: process.env.REACT_APP_APP_VERSION || '',
  APP_NAME: process.env.REACT_APP_APP_NAME || '',
};

// Validate required environment variables
export const validateEnv = () => {
  const required = ['STORE_NAME', 'STORE_PHONE'];
  const missing = required.filter((key) => !config[key]);

  if (missing.length > 0) {
    console.warn(
      `Missing environment variables: ${missing.join(', ')}`
    );
  }
};
