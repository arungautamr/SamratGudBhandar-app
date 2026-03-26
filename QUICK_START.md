# Quick Start Guide - Samrath Gud Bhandar

**Just want to run it? Here's the fastest way:**

## 1. Install (30 seconds)
```bash
npm install
```

## 2. Configure (1 minute)
Edit `.env.local` - Change these lines ONLY:
```env
REACT_APP_STORE_WHATSAPP=91XXXXXXXXXX    ← Your WhatsApp number
REACT_APP_STORE_PHONE=+91-XXXXXXXXXX      ← Your phone number
REACT_APP_STORE_EMAIL=your-email@example.com
REACT_APP_STORE_ADDRESS=Your Business Address
```

**Important:** WhatsApp number format is `91XXXXXXXXXX` (no +, no spaces, no dashes)

## 3. Run (5 seconds)
```bash
npm start
```

Open `http://localhost:3000` in your browser.

---

## Customize Products

Edit `src/recoil/atoms.js` - Find the `productsAtom` and update this array:

```javascript
default: [
  {
    id: 1,
    name: 'Premium Jaggery Pieces',      ← Product name
    weight: '500g',                       ← Weight/size
    price: '₹250',                        ← Price (include ₹ symbol)
    description: 'Golden-brown...',       ← Description
    image: '/jaggery-product.jpg',        ← Image path
  },
  // Add more products here...
]
```

---

## Add Images

1. Place image files in `/public/` folder
2. Update `image` field in products: `/filename.jpg`

That's it!

---

## Deploy to Live Server

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
```
Then upload the `build/` folder to Netlify.

### Your Own Server
```bash
npm run build
# Upload build/ folder to your server
# Serve with Nginx or Apache
```

---

## Common Changes

### Change Colors
Edit `src/index.css`:
```css
:root {
  --primary: oklch(0.55 0.18 50);    ← Main color
  --secondary: oklch(0.75 0.12 60);  ← Secondary color
  --accent: oklch(0.65 0.15 45);     ← Accent color
}
```

### Change Store Name
Edit `.env.local`:
```env
REACT_APP_STORE_NAME=Your Store Name
```

### Add More Products
Edit `src/recoil/atoms.js` - duplicate a product object in the array.

### Change Pages
- Home page: `src/pages/Home.jsx`
- Products: `src/pages/Products.jsx`
- About: `src/pages/About.jsx`
- Contact: `src/pages/Contact.jsx`

---

## Available Scripts

```bash
npm start       # Run development server
npm run build   # Build for production
npm run lint    # Check code quality
npm run format  # Format code automatically
npm test        # Run tests (if configured)
```

---

## File Structure at a Glance

```
src/
├── components/    # Visual components (Header, Footer, Products, etc)
├── pages/         # Full pages (Home, About, Contact)
├── recoil/        # Global state (products, cart, theme)
├── hooks/         # Custom hooks (useCart, useTheme)
├── utils/         # Helper functions
├── config/        # Configuration
├── styles/        # CSS files
├── App.jsx        # Main app with routing
└── index.jsx      # React entry point

public/           # Static files (images, favicon)
.env.local        # Your configuration (update this!)
package.json      # Dependencies
```

---

## Troubleshooting

**Nothing shows up?**
- Run `npm install` again
- Clear browser cache (Ctrl+Shift+Del)
- Restart the dev server

**WhatsApp buttons not working?**
- Check `.env.local` - phone number is correct?
- Format should be: `919876543210` (no +, spaces, or dashes)
- Test on mobile device (desktop might not have WhatsApp)

**Images not loading?**
- Images must be in `/public/` folder
- Reference as `/filename.jpg` in code
- Check filename spelling exactly

**Weird styling?**
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Delete `node_modules` and run `npm install`

---

## Need Help?

1. **Setup questions** → Read `SETUP_GUIDE.md`
2. **What changed** → Read `MIGRATION_SUMMARY.md`
3. **React help** → https://react.dev
4. **Recoil help** → https://recoiljs.org
5. **Router help** → https://reactrouter.com

---

## Production Checklist

Before going live:

- [ ] Update `.env.local` with real details
- [ ] Add real products to `src/recoil/atoms.js`
- [ ] Test locally: `npm start`
- [ ] Test WhatsApp links (use mobile)
- [ ] Test dark mode
- [ ] Test on mobile screens
- [ ] Build: `npm run build`
- [ ] Deploy to Vercel/Netlify
- [ ] Set environment variables on hosting
- [ ] Test live site
- [ ] Set up custom domain (if needed)

---

## Summary

1. ✅ `npm install` - Install dependencies
2. ✅ Edit `.env.local` - Add your business info
3. ✅ `npm start` - Run locally
4. ✅ Edit `src/recoil/atoms.js` - Add products
5. ✅ `npm run build` - Build for production
6. ✅ Deploy - Share with the world!

**That's all you need to know to get started!**

For detailed information, see the other documentation files.
