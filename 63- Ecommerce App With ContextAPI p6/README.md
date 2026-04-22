# 🚀 React E-Commerce Frontend (Full Featured)

A scalable React e-commerce frontend with **geolocation, filtering, categories, pagination, authentication UI, carousel, and modern UI design**. Built with real-world architecture and production-level component patterns.

---

## 📌 Features

### 🌍 Location-Based Experience

* Detects user location via browser API
* Reverse geocoding using Geoapify
* Displays:

  * Country
  * State
* Dropdown to manually re-detect location

---

### 🎯 Banner (Hero Section)

* Full-width banner with background image
* Fixed scroll effect (`background-attachment: fixed`)
* Dark overlay for readability
* CTA button: **Shop Now**

---

### 🎞️ Carousel + Category Section

* Built using **react-slick**
* Auto-play slider with custom arrows
* Displays featured products dynamically
* Integrated **Category section** below carousel

#### Highlights:

* Smooth transitions (2s speed)
* Auto-play every 14s
* Custom navigation arrows
* Product preview (title, category, description)

---

### 🧭 Category System

* Categories rendered dynamically
* Helps users quickly navigate product types
* Integrated into carousel/home UI

---

### 🔍 Advanced Filtering System

Filter products using:

* 🔎 Search (by title)
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

### 📄 Smart Pagination (with Ellipsis Logic)

Efficient pagination system for large datasets.

#### 🧠 Core Logic:

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

#### ✅ Features:

* Handles large page counts
* Shows ellipsis (`...`) for better UX
* Keeps UI clean and minimal

---

### 📦 Product Rendering + Pagination

```js
filterData?.slice(page * 16 - 16, page * 16)
```

* 16 products per page
* Dynamic slicing based on current page

---

### 🧾 Product Card (ProductCart)

* Glassmorphism UI
* Product image with fallback
* Title trimming
* Price formatting
* Add to Cart button
* Hover animation

---

### 🧭 Navbar (Advanced)

Includes:

* 📍 Location display + dropdown
* 🔽 Toggle for location update
* 🧭 Navigation links (React Router)
* 🛒 Cart icon with badge
* 🔐 Authentication UI using **Clerk**

#### Auth Features:

* `SignedIn` → shows user avatar
* `SignedOut` → shows Sign In button

---

### 🔐 Authentication (Clerk)

* Integrated Clerk authentication UI
* Components used:

  * `SignInButton`
  * `UserButton`
  * `SignedIn`
  * `SignedOut`

---

### 🧭 Breadcrumb Navigation

```jsx
Home / Products / Product Title
```

* Improves navigation clarity
* Clickable routing using `useNavigate`

---

## 🧱 Tech Stack

* **Frontend:** React.js
* **Routing:** react-router-dom
* **State:** Context API
* **HTTP:** Axios
* **Styling:** Tailwind CSS
* **Slider:** react-slick
* **Icons:** lucide-react
* **Auth:** Clerk
* **APIs:**

  * Fake Store API
  * Geoapify API

---


---

## ⚙️ Environment Variables

```env
VITE_GEOAPIFY_KEY=your_api_key_here
```

---

