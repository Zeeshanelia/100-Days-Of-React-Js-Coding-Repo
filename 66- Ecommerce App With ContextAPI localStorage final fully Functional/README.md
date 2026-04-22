# 🚀 React E-Commerce Frontend (Complete Project)

A **full-featured React e-commerce application** built with modern frontend practices. This project includes **geolocation, product filtering, categories, pagination, authentication, cart system, product details page, carousel, and responsive UI** — making it a strong **portfolio-level project**.

---

# 📌 Features Overview

## 🌍 Location-Based System

* Detects user location using browser Geolocation API
* Reverse geocoding via Geoapify API
* Displays:

  * Country
  * State
* Manual “Detect Location” option available (Navbar + Checkout)

---

## 🎯 Banner (Hero Section)

* Full-width responsive banner
* Background image with parallax effect (`fixed`)
* Dark overlay for readability
* CTA button: **Shop Now**

---

## 🎞️ Carousel + Category Section

* Built using **react-slick**
* Auto-play slider with custom arrows
* Displays featured products dynamically
* Category section integrated below slider

### Features:

* Smooth animation (2s speed)
* Auto-play (14s interval)
* Custom navigation icons
* Product highlights (title, category, description)

---

## 🧭 Category System

* Dynamic category rendering
* Integrated with filter system
* Improves product navigation

---

## 🔍 Advanced Filtering System

Supports:

* 🔎 Search (by product title)
* 🧭 Category filter
* 🏷️ Brand filter
* 💰 Price range filter

```js
const filterData = data?.filter((item) =>
  item.title.toLowerCase().includes(search.toLowerCase()) &&
  (category === "fragrances" || item.category === category) &&
  (brand === "gucci" || item.brand === brand) &&
  item.price >= priceRange[0] &&
  item.price <= priceRange[1]
);
```

---

## 📄 Smart Pagination (Ellipsis Logic)

Handles large datasets efficiently:

```js
const getPages = (current, total) => {
  const pages = [];

  if (total <= 5) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  pages.push(1);

  if (current <= 3) {
    pages.push(2, 3, 4, "...", total);
  } else if (current >= total - 2) {
    pages.push("...", total - 3, total - 2, total - 1, total);
  } else {
    pages.push("...", current - 1, current, current + 1, "...", total);
  }

  return pages;
};
```

### ✅ Benefits:

* Clean UI
* Better UX for large page counts
* Dynamic page navigation

---

## 📦 Product Listing System

* Fetches products from API
* Uses Context API for global state
* Displays products in grid layout
* Pagination applied:

```js
filterData?.slice(page * 16 - 16, page * 16)
```

---

## 🧾 Product Card (ProductCart)

* Glassmorphism UI design
* Image fallback handling
* Trimmed product title
* Price formatting
* Add to Cart button
* Hover animations

---

## 🧭 Navbar (Advanced)

Includes:

* 📍 Location display + dropdown
* 🔄 Detect location button
* 🧭 Navigation links (React Router)
* 🛒 Cart icon with badge
* 🔐 Authentication (Clerk)

---

## 🔐 Authentication (Clerk)

* `SignedOut` → Sign In button
* `SignedIn` → User avatar
* Uses `useUser()` hook

---

## 🧭 Breadcrumb Navigation

### Component: `Breadcrums`

```jsx
Home / Products / Product Title
```

### Features:

* Clickable navigation
* Dynamic title support
* Uses `useNavigate`
* Improves UX

---

## 📄 Single Product Page

### Features:

* Dynamic route (`/product/:id`)
* API-based product fetching
* Displays:

#### 📦 Product Info:

* Image
* Title
* Category & Brand
* Description
* Rating (stars)
* Price + Discount

#### 📊 Stock Status:

* In stock / low stock indicator

#### 🔢 Quantity Selector

#### 🛒 Add to Cart Button

#### 📌 Extra Info:

* SKU
* Warranty
* Shipping

---

## 🛒 Cart System

### Features:

* Add / Remove items
* Increase / Decrease quantity
* Dynamic total calculation

```js
const totalPrice = cartItem.reduce((total, item) => total + item.price, 0)
```

---

### 🧾 Cart UI Includes

#### 🛍️ Cart Items:

* Product image
* Title
* Price
* Quantity controls
* Remove button

#### 🚚 Delivery Info Form:

* Auto-filled:

  * User name (Clerk)
  * Location
* Manual fields:

  * Address
  * Phone
  * Postcode

#### 💳 Bill Details:

* Items total
* Delivery → FREE
* Handling charge → $5
* Grand total

#### 🎟️ Promo Code:

* Apply discount input

#### ✅ Checkout:

* Proceed to Checkout button

---

## 🧠 Context API (Global State)

### DataContext:

* Stores product data
* Fetch function: `fetchAllData()`

### CartContext:

* Manages:

  * Cart items
  * Quantity updates
  * Delete item

---

## 🧱 Tech Stack

* **React.js**
* **React Router DOM**
* **Context API**
* **Axios**
* **Tailwind CSS**
* **React Slick**
* **Lucide Icons**
* **Clerk Authentication**



---

## ⚙️ Environment Variables

```env
VITE_GEOAPIFY_KEY=your_api_key_here
```

---

## ▶️ Getting Started

```bash

npm install react-slick
npm i lottie-react
npm i react-toastify