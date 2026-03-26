# Samrath Gud Bhandar - E-Commerce Platform

A production-level React e-commerce application for authentic Indian jaggery sales using CRA structure with Recoil state management.

## Features

- **Product Showcase** - Display jaggery products with images, descriptions, and pricing
- **State Management** - Recoil atoms for global state (cart, products, theme, filters)
- **WhatsApp Integration** - Direct customer communication via WhatsApp buttons
- **Dark Mode** - Theme switching with localStorage persistence
- **Responsive Design** - Mobile-first design approach
- **Error Handling** - Error boundaries for crash prevention
- **Environment Configuration** - Secure env variable management
- **Production Ready** - Proper folder structure, utilities, hooks, and config management

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Products.jsx
│   └── ErrorBoundary.jsx
├── pages/               # Page components (route-based)
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── recoil/              # Recoil state management
│   └── atoms.js
├── hooks/               # Custom React hooks
│   ├── useCart.js
│   └── useTheme.js
├── config/              # Configuration files
│   └── env.js
├── styles/              # CSS stylesheets
│   ├── header.css
│   ├── hero.css
│   ├── products.css
│   ├── footer.css
│   └── page.css
├── utils/               # Utility functions
│   └── helpers.js
├── App.jsx              # Main App component with routing
├── App.css              # App styles
├── index.jsx            # React entry point
└── index.css            # Global styles
public/
├── index.html           # HTML template
├── hero-jaggery.jpg     # Hero image
├── jaggery-product.jpg  # Product images
└── farm-scene.jpg       # Farm images
.env.local              # Environment variables (local)
.env.example            # Environment variables template
package.json            # Dependencies and scripts
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local` and update with your values:

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
REACT_APP_STORE_NAME=Samrath Gud Bhandar
REACT_APP_STORE_EMAIL=your-email@example.com
REACT_APP_STORE_PHONE=+91-XXXXXXXXXX
REACT_APP_STORE_WHATSAPP=91XXXXXXXXXX  # Without + or spaces
REACT_APP_STORE_ADDRESS=Your Address Here
```

### 3. Start Development Server

```bash
npm start
# or
pnpm dev
```

The app will open at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
# or
pnpm build
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Technologies Used

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Recoil** - State management
- **CSS3** - Styling with CSS variables (OKLch color space)
- **Environment Variables** - Secure configuration

## Key Features Explained

### Recoil State Management

Global state atoms for:
- `cartAtom` - Shopping cart items
- `productsAtom` - Available products
- `themeAtom` - Light/Dark theme
- `filterAtom` - Product filters
- `searchQueryAtom` - Search functionality
- `loadingAtom` - Loading states

### Custom Hooks

**useCart** - Manage cart operations
```javascript
const { cart, addToCart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
```

**useTheme** - Toggle dark/light mode
```javascript
const { theme, toggleTheme } = useTheme();
```

### Utility Functions

- `sendWhatsAppMessage()` - Send WhatsApp messages with pre-filled text
- `validateEmail()` - Email validation
- `validatePhone()` - Phone number validation
- `smoothScroll()` - Smooth scroll to elements
- `debounce()` & `throttle()` - Performance optimization

### Error Handling

ErrorBoundary component catches React errors and provides fallback UI.

## Styling

The app uses a production-grade color system with OKLch color space:
- Primary: Warm golden-brown (jaggery color)
- Secondary: Lighter earth tones
- Accent: Complementary highlights
- Dark mode support with automatic theme switching

CSS variables are defined in `src/index.css` and can be customized globally.

## Deployment

### GitHub Pipeline (CI + Production Deploy)

This project is configured with GitHub Actions:

- `CI` workflow: runs lint + production build on push/PR
- `Deploy to GitHub Pages` workflow: deploys `build/` from `main`/`master`

Workflows are in:
- `.github/workflows/ci.yml`
- `.github/workflows/deploy.yml`

#### GitHub repository setup

1. Go to **Settings -> Pages**
2. Under **Build and deployment**, select **GitHub Actions**
3. Add repository variables in **Settings -> Secrets and variables -> Actions -> Variables**:
   - `ADMIN`
   - `REACT_APP_STORE_NAME`
   - `REACT_APP_STORE_EMAIL`
   - `REACT_APP_STORE_PHONE`
   - `REACT_APP_STORE_WHATSAPP`
   - `REACT_APP_STORE_ADDRESS`
   - `REACT_APP_API_BASE_URL`
   - `REACT_APP_API_TIMEOUT`
   - `REACT_APP_ENABLE_CART`
   - `REACT_APP_ENABLE_WISHLIST`
   - `REACT_APP_ENABLE_SEARCH`
   - `REACT_APP_GOOGLE_ANALYTICS_ID`
   - `REACT_APP_APP_VERSION`
   - `REACT_APP_APP_NAME`
4. Add repository secrets in **Settings -> Secrets and variables -> Actions -> Secrets**:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_CONTACT_TEMPLATE_ID`
   - `VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Deploy the 'build' folder to Netlify
```

### Environment Variables on Vercel/Netlify

Set environment variables in your deployment dashboard:
- `REACT_APP_STORE_NAME`
- `REACT_APP_STORE_EMAIL`
- `REACT_APP_STORE_PHONE`
- `REACT_APP_STORE_WHATSAPP`
- `REACT_APP_STORE_ADDRESS`

## Best Practices

1. **State Management** - Use Recoil hooks instead of prop drilling
2. **Error Handling** - Wrap components in ErrorBoundary
3. **Performance** - Use React.memo for expensive components
4. **Validation** - Always validate form inputs before submission
5. **Responsive** - Test on mobile, tablet, and desktop
6. **Accessibility** - Use semantic HTML and ARIA labels

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run format` to format code
4. Run `npm run lint` to check for errors
5. Submit a pull request

## Support

For issues and questions, contact: `hello@samrathgud.com`

## License

This project is proprietary and owned by Samrath Gud Bhandar.
# SamratGudBhandar
