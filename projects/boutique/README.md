# Luxe Boutique Website

A responsive boutique storefront with:
- Home/hero section
- Product catalogue and category filters
- Product search
- Shopping bag with quantity controls
- LocalStorage cart persistence
- WhatsApp checkout
- Newsletter form
- About and contact sections
- Mobile responsive navigation

## IMPORTANT: Change the WhatsApp number

Open `js/script.js` and replace:

`const WHATSAPP_NUMBER = "2348000000000";`

with the boutique's real WhatsApp number, using country code and no `+`, spaces or leading zero.

Example:
`const WHATSAPP_NUMBER = "2348012345678";`

## How to test

Double-click `index.html` or open it in a browser.

## How to host for free

### Netlify
1. Create a free Netlify account.
2. Choose Add new site → Deploy manually.
3. Upload the entire project folder.
4. Netlify gives you a public `https://...netlify.app` link.
5. Send that link to the boutique on WhatsApp.

### GitHub Pages
1. Create a GitHub repository.
2. Upload `index.html`, `css`, `js`, and `README.md`.
3. Go to Settings → Pages.
4. Select the main branch and root folder.
5. GitHub generates a public website link.

## Customization

Change the boutique name in `index.html` from `LUXE` to the real business name.

Replace the demo product names, prices and image URLs in `js/script.js`.

For a production store with real payments, stock management, admin dashboard, customer accounts and a database, connect this frontend to a backend such as PHP/MySQL or another hosted backend.
