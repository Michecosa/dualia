# Dualia - Interior Design E-commerce

Dualia is a sophisticated full-stack e-commerce platform dedicated to minimalist interior design. The project focuses on a "Two colors, One balance" philosophy, offering a curated selection of home decor items like zen gardens, clocks, and ambient lighting.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

## Usage

Start the development server:

```bash
npm run dev
```

## Database Setup

The project includes a pre-configured MySQL database export located in the `db_dualia` folder. You need to import it to use it with the [Backend Repository](https://github.com/Michecosa/team-1).
Follow these steps to set it up:

1.  **Create the Database**: Open your MySQL terminal or GUI (like MySQL Workbench or phpMyAdmin) and run:
    ```sql
    CREATE DATABASE db_dualia;
    ```
2.  **Import the Schema**: Use the **Data Import** feature in MySQL and select `db_dualia/dualia-eng.sql` as the Self-Contained File to import.

3.  **Backend Configuration**: Ensure your backend environment variables (in your `.env` file) match your local MySQL credentials:
    - **DB_HOST**: `localhost`
    - **DB_USER**: `your_username`
    - **DB_PASSWORD**: `your_password`
    - **DB_DATABASE**: `db_dualia`

4.  **Email Service (Mailtrap)**:
    To enable newsletter subscriptions and order confirmation emails, you need to set up a [Mailtrap](https://mailtrap.io/) account. Once registered, add your credentials to the backend `.env` file:
    - **MAILTRAP_USER**: `your_username`
    - **MAILTRAP_PASS**: `your_password`

---

### Folder Structure

```
├── 📁 db_dualia
│   └── 📄 dualia-eng.sql
├── 📁 src
│   ├── 📁 assets
│   ├── 📁 components
│   ├── 📁 layout
│   ├── 📁 pages
│   ├── 📄 App.jsx
│   ├── 🎨 index.css
│   ├── 📄 main.jsx
│   └── 📄 wishlistUtils.js
├── ⚙️ .gitignore
├── 📝 README.md
├── 📄 eslint.config.js
├── 🌐 index.html
├── ⚙️ package-lock.json
├── ⚙️ package.json
└── 📄 vite.config.js
```

## Front-end

- **Responsive Homepage**: Features hero sections, "Our Products" categories, and "Best Sellers".
- **Product Catalog**: Advanced filtering and sorting of home decor items.
- **Wishlist System**: Users can save their favorite items for later.
- **Interactive Shopping Cart**: Real-time updates with discount code support.
- **Complete Checkout Flow**: Secure multi-step process including billing/shipping info and payment processing simulation.
- **Order Confirmation**: Dynamic "Thank You" page with automated confirmation messaging.

## Back-end

- Serves a REST API to manage products, create and track orders, apply discounts, and send related emails.
- Provides basic request validation/error handling via `middlewares/`.

## Visual Overview

|                      Homepage                      |                  Product Catalog                   |
| :------------------------------------------------: | :------------------------------------------------: |
| ![Homepage](./src/assets/screenshots/Homepage.png) | ![Products](./src/assets/screenshots/Products.png) |

|               Shopping Cart                |                  Checkout Process                  |
| :----------------------------------------: | :------------------------------------------------: |
| ![Cart](./src/assets/screenshots/Cart.png) | ![Checkout](./src/assets/screenshots/Checkout.png) |

|                      Wishlist                      |                        Single Product                         |
| :------------------------------------------------: | :-----------------------------------------------------------: |
| ![Wishlist](./src/assets/screenshots/Wishlist.png) | ![Single Product](./src/assets/screenshots/SingleProduct.png) |

|                     Payment Loading                     |                    Order Success                    |
| :-----------------------------------------------------: | :-------------------------------------------------: |
| ![Loading](./src/assets/screenshots/CheckoutLoader.png) | ![Thank You](./src/assets/screenshots/ThankYou.png) |

|                 Welcome Popup                  |                      Route 404                      |
| :--------------------------------------------: | :-------------------------------------------------: |
| ![Loading](./src/assets/screenshots/Popup.png) | ![Thank You](./src/assets/screenshots/Route404.png) |
