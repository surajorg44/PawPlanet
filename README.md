# Paw Planet E-commerce Website

A comprehensive e-commerce platform for pet products and services, seamlessly integrated with the Paw Planet mobile app ecosystem.

![Paw Planet Logo](assets/images/logo.png)

## 🌟 Features

### Pages
- **Homepage** - Hero banner, featured products/services, bank offers, trust badges
- **Product Listing** - Advanced filters, sorting, product grid
- **Product Detail** - Variant selection, stock status, pricing, delivery info
- **Service Booking** - Pet selection, profile validation, date/time slots
- **Shopping Cart** - Quantity controls, price summary, promo codes
- **Checkout Flow** - Address selection, order review, payment methods
- **Account Page** - Profile, pets, orders, addresses

### Core Functionality
- ✅ Cart management with localStorage persistence
- ✅ Service booking with pet profile & vaccination validation
- ✅ Product filters and sorting
- ✅ Variant/size selection
- ✅ "Remind Me Later" for out-of-stock products
- ✅ Responsive mobile-first design
- ✅ Professional SVG icons (no emojis)
- ✅ Animated hero banner images

## 🎨 Design

**Brand Colors:**
- Primary Teal: `#1a5f6f`
- Secondary Orange: `#ea580c`
- Success Green: `#10b981`

**Typography:**
- Headings: Outfit (Google Fonts)
- Body: Inter (Google Fonts)

## 📁 Project Structure

```
paw-planet/
├── index.html                    # Homepage
├── products.html                 # Product listing
├── product-detail.html           # Product details
├── service-booking.html          # Service booking
├── cart.html                     # Shopping cart
├── checkout-address.html         # Address selection
├── checkout-review.html          # Order review
├── checkout-payment.html         # Payment
├── account.html                  # User account
├── css/
│   └── paw-planet-styles.css    # Complete design system
├── js/
│   ├── app.js                   # Core application
│   ├── cart.js                  # Cart management
│   └── mock-data.js             # Sample data
└── assets/
    └── images/
        ├── logo.png             # Paw Planet logo
        ├── hero-banner.png      # Hero banner image
        ├── grooming-service.png # Service image
        └── products-banner.png  # Products banner
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/surajorg44/PawPlanet.git
   cd PawPlanet
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No build process required!

3. **Explore the features**
   - Browse products and services
   - Add items to cart
   - Try the service booking flow
   - Test the checkout process

## 💡 Key Features Explained

### Cart Management
- Products and services can be added to cart
- Persistent storage using localStorage
- Automatic price calculations (subtotal, tax, delivery)
- Promo code support

### Service Booking with Pet Validation
- Select from registered pets
- Validates pet profile completion (≥50%)
- Checks vaccination records (Rabies, DHPP)
- Verifies age requirements
- Date and time slot selection

### Product Features
- Multiple variants/sizes with individual pricing
- Stock status indicators
- "Remind Me Later" for out-of-stock items
- Advanced filtering and sorting

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom design system with CSS variables
- **Vanilla JavaScript** - No frameworks, pure JS
- **localStorage** - Client-side data persistence
- **SVG Icons** - Professional, scalable icons

## 📱 Mobile App Integration

The website is designed to integrate with the Paw Planet mobile app:
- Single Sign-On (SSO)
- Synced user profiles
- Synced pet profiles and vaccination records
- Synced cart data
- Synced order history

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Copyright © 2026 Paw Planet. All rights reserved.

## 👨‍💻 Developer

Created with ❤️ for pets and their humans.

---

**Note:** This is a frontend-only implementation with mock data. For production use, integrate with a backend API for:
- User authentication
- Product catalog
- Order management
- Payment processing
- Notification services
