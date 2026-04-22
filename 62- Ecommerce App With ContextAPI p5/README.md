# 🚀 React E-Commerce Frontend (Geo Location + Filters + Pagination)

A production-ready React application featuring product filtering, category management, pagination, and real-time location detection. Designed with scalable architecture and modern UI practices.

---
## 📌 Features

### 🌍 User Location Detection

* Uses browser Geolocation API
* Reverse geocoding via Geoapify API
* Displays:

  * Country
  * State
  * City/Town

---

### 🛍️ Product System

* Fetches up to 200 products from API
* Managed globally via Context API
* Optimized rendering with filtering + pagination

---

### 🎯 Banner Section (Hero)

* Full-width responsive banner
* Background image with **fixed scroll effect**
* Dark overlay (`bg-black/60`)
* Includes:

  * Heading
  * Description
  * CTA button (Shop Now)

---

### 🔍 Advanced Filter Section

Users can filter products using:

* 🔎 **Search**

  * Real-time filtering by product title

* 🧭 **Category**

  * Default: `fragrances`
  * Filters products by category

* 🏷️ **Brand**

  * Default: `gucci`
  * Filters products by brand (if available in API)

* 💰 **Price Range**

  * Dynamic filtering using min/max values

---

### 🧭 Category Handling

* Categories extracted from API
* Used in filter dropdown
* Enhances browsing experience

---

### 📄 Pagination System

* Displays products in chunks (16 per page)
* Controlled via state
* Improves performance and UX

---

### 🧾 Product Card UI

* Glassmorphism design
* Product image with fallback
* Title + price display
* “Add to Cart” button
* Hover animations and transitions

---

## 🧠 Core Logic (Product Page)

### 📦 Data Fetching

```jsx
useEffect(() => {
  fetchAllData();
}, []);
```

* Fetches product data on component mount
* Stored in global context

---

### 🔍 Filtering Logic

```js
const filterData = data?.filter((item) =>
  item.title.toLowerCase().includes(search.toLowerCase()) &&
  (category === "fragrances" || item.category === category) &&
  (brand === "gucci" || item.brand === brand) &&
  item.price >= priceRange[0] &&
  item.price <= priceRange[1]
);
```

#### ✔️ Explanation:

* Search matches product title
* Category filter applies conditionally
* Brand filter applies if available
* Price range filters numeric values

---

### 📄 Pagination Logic

```js
filterData?.slice(page * 16 - 16, page * 16)
```

* 16 products per page
* Calculates correct slice dynamically

---

### 🔄 Page Change Handler

```js
const handlePage = (selectedPage) => {
  setPage(selectedPage);
};
```

---

### 🎛️ Filter Handlers

```js
const handleCategoryChange = (e) => setCategory(e.target.value);
const handleBrandChange = (e) => setBrand(e.target.value);
```

---

## 🧩 Components Breakdown

### 📦 Product Component

* Handles:

  * Fetching data
  * Filtering
  * Pagination
  * Layout

---

### 🧾 ProductCart Component

* Displays:

  * Product Image
  * Title (trimmed)
  * Price
  * Add to Cart button

* Features:

  * Image fallback handling
  * Hover animations
  * Glass UI design

---

### 🎛️ FilterSection Component

* Controls:

  * Search input
  * Category dropdown
  * Brand dropdown
  * Price range

---

### 📄 Pagination Component

* Handles page navigation
* Updates visible product set

---


## ⚙️ Environment Variables

```env
VITE_GEOAPIFY_KEY=your_api_key_here
```


