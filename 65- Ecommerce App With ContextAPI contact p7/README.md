# 🚀 React E-Commerce Frontend (Full Featured + Cart + Product Details)

A **production-level React e-commerce application** with advanced features including **geolocation, filtering, pagination, authentication, cart system, product details page, breadcrumbs navigation, and modern UI/UX**.

---

## 📌 Features

---

### 🌍 Location-Based System

* Detects user location via browser API
* Reverse geocoding using Geoapify
* Displays:

  * Country
  * State
* Manual "Detect Location" option in Navbar & Checkout

---

### 🎯 Banner (Hero Section)

* Full-width responsive banner
* Background image with parallax (`fixed`)
* Overlay with CTA
* Improves landing experience

---

### 🎞️ Carousel + Category Section

* Built with **react-slick**
* Auto-play slider
* Custom navigation arrows
* Displays featured products
* Includes **Category component**

---

### 🧭 Category System

* Dynamic category rendering
* Integrated with filtering system
* Improves product discoverability

---

### 🔍 Advanced Filtering System

Supports:

* 🔎 Search (title-based)
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

### 📄 Smart Pagination (Ellipsis Logic)

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

#### ✅ Benefits:

* Clean UI
* Better UX for large page counts
* Dynamic page rendering

---

### 🧾 Product Card (ProductCart)

* Glassmorphism design
* Image fallback handling
* Title trimming
* Price formatting
* Add to Cart button
* Hover effects

---

## 🛒 Cart System (Advanced)

### 📦 Features:

* Add / Remove items
* Increase / Decrease quantity
* Dynamic total calculation
* Delivery + billing UI

### 🧠 Core Logic:

```js
const totalPrice = cartItem.reduce((total, item) => total + item.price, 0)
```

---

### 📋 Cart UI Includes:

#### 🧾 Cart Items

* Product image
* Title
* Price
* Quantity controls (+ / -)
* Remove button

#### 🚚 Delivery Info Form

* Auto-filled:

  * Name (Clerk user)
  * Location (country, state)
* Manual inputs:

  * Address
  * Phone
  * Postcode

#### 💳 Bill Details

* Items total
* Delivery (FREE)
* Handling charge ($5)
* Grand total

#### 🎟️ Promo Code Section

* Input + Apply button

#### ✅ Checkout Button

* “Proceed to Checkout”

---

### 🔐 Authentication (Clerk)

* `SignedIn` → User avatar
* `SignedOut` → Sign In button
* `useUser()` for user data

---

## 🧭 Breadcrumb Navigation

### 📍 Component: `Breadcrums`

```jsx
Home / Products / Product Title
```

### ✅ Features:

* Clickable navigation
* Uses `useNavigate`
* Dynamic product title support
* Improves UX and navigation clarity

---

## 📄 Single Product Page

### 🔍 Features:

* Dynamic routing (`/product/:id`)
* Fetches product via API
* Displays:

#### 📦 Product Details:

* Image
* Title
* Category + Brand
* Description
* Rating (stars)
* Price + Discount

#### 📊 Stock Info:

* In stock / Low stock indicator

#### 🔢 Quantity Selector

#### 🛒 Add to Cart Button

#### 📌 Extra Info:

* SKU
* Warranty
* Shipping

---

## 🧠 Data Fetching (Single Product)

```js
const response = await axios.get(`https://dummyjson.com/products/${param?.id}`);
```

---

## 🧭 Navbar (Advanced)

Includes:

* 📍 Location display + dropdown
* 🔄 Detect location button
* 🧭 Navigation links
* 🛒 Cart icon with badge
* 🔐 Authentication UI

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
