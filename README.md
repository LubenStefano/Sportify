# Sportify

Sportify is a modern web platform dedicated to promoting a healthy lifestyle. It offers a variety of services, including personalized fitness subscriptions, an online shop for supplements and sports accessories, and expert consultations. The project is built using HTML, CSS, and JavaScript, with a focus on user experience and responsive design.

---
## Preview
![image](https://github.com/user-attachments/assets/7b5592af-5b1e-4756-a53b-0b3ef4a71ba9)

![image](https://github.com/user-attachments/assets/ecbba30c-ab8b-4801-8799-f1f51bff737a)

![image](https://github.com/user-attachments/assets/f7865d15-b913-441e-b610-878297d0a148)

![image](https://github.com/user-attachments/assets/477786a1-f731-4ab7-b6b7-d26cf4bb1866)

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Shop Functionality](#shop-functionality)
- [Contacts & Services](#contacts--services)
- [Customization](#customization)
- [Credits](#credits)

---

## Features

- **Responsive Design:** Works seamlessly on desktop and mobile devices.
- **Online Shop:** Browse and purchase products with a dynamic cart system.
- **Subscription Services:** Choose from different fitness and wellness plans.
- **Contact Page:** Easy access to contact information and social media.
- **Modern UI:** Clean, attractive interface with intuitive navigation.

---

## Project Structure

```
Sportify/
│
├── index.html           # Home page
├── shop.html            # Online shop
├── services.html        # Subscription services
├── contacts.html        # Contact information
├── products.json        # Product data for the shop
│
├── CSS/
│   ├── styles.css       # Main styles
│   ├── shop.css         # Shop-specific styles
│   ├── services.css     # Services page styles
│   └── contacts.css     # Contacts page styles
│
├── JS/
│   ├── script.js        # General scripts
│   ├── shop.js          # Shop logic (cart, product rendering, checkout)
│   └── services.js      # Services page scripts
│
├── Photos/              # Images for products and UI
├── FAVICONS/            # Favicon and manifest files
└── .vs/                 # Visual Studio Code workspace settings
```

---

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/sportify.git
   cd sportify
   ```

2. **Open in Visual Studio Code or your preferred editor.**

3. **Run locally:**
   - Open `index.html` in your browser.
   - For full functionality (fetching `products.json`), use a local server:
     ```sh
     npx serve .
     ```
     or
     ```sh
     python -m http.server
     ```

---

## Usage

- **Home Page (`index.html`):** Learn about the benefits of a healthy lifestyle and the mission of Sportify.
- **Shop (`shop.html`):** Browse products, add them to your cart, and proceed to checkout.
- **Services (`services.html`):** Explore and subscribe to different fitness and wellness plans.
- **Contacts (`contacts.html`):** Find contact details and social media links.

---

## Shop Functionality

The shop is powered by [`JS/shop.js`](JS/shop.js):

- **Product Rendering:** Products are loaded from [`products.json`](products.json) and displayed dynamically.
- **Cart System:** Add products to your cart, adjust quantities, and remove items.
- **Checkout:** Review your order and confirm your purchase with a simple checkout process.
- **Cart Counter:** The number of items in your cart is always visible in the navbar.

**Key Functions:**
- [`renderProducts`](JS/shop.js): Displays products in the shop.
- [`addToCart`](JS/shop.js): Adds a product to the cart.
- [`renderCart`](JS/shop.js): Updates the cart display.
- [`quantityPlus`](JS/shop.js), [`quantityMinus`](JS/shop.js): Adjust product quantities.
- [`priceCalculation`](JS/shop.js): Calculates the total price.
- [`productsAmount`](JS/shop.js): Updates the cart counter.

---

## Contacts & Services

- **Contacts:** The [`contacts.html`](contacts.html) page provides address, phone, email, and social media links.
- **Services:** The [`services.html`](services.html) page lists all available subscription plans, each with a description and price.

---

## Customization

- **Add Products:** Edit [`products.json`](products.json) to add or modify shop items.
- **Change Styles:** Modify CSS files in the [`CSS/`](CSS/) directory for custom branding.
- **Update Content:** Edit the HTML files for new sections, testimonials, or information.

---

## Credits

- **Icons:** [Ionicons](https://ionic.io/ionicons)
- **Fonts:** [Google Fonts - Fjalla One](https://fonts.google.com/specimen/Fjalla+One)
- **Images:** All images are located in the [`Photos/`](Photos/) directory.

---


**Enjoy using Sportify and help others lead a healthier life!**
