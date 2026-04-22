# 🚀 React E-Commerce Frontend (Geo Location Based)

A modern, scalable React application that fetches product data and enhances UX with real-time location detection, product filtering, categories, and a visually engaging banner section.

---

## 📌 Features

### 🌍 User Location Detection

* Uses browser Geolocation API
* Converts coordinates into:

  * Country
  * State
  * City (or Town)
* Powered by Geoapify Reverse Geocoding API

---

### 🛍️ Product Management

* Fetches up to 200 products from Fake Store API
* Global state using Context API
* Centralized data access across components

---

### 🧭 Category System

* Dynamically groups products into categories
* Allows users to browse products category-wise
* Improves navigation and UX

---

### 🔍 Filter Section

* Filter products based on:

  * Category
  * Price (can be extended)
  * Search keyword (if implemented)
* Helps users quickly find relevant items
* Designed for scalability (can add sorting, ratings, etc.)

---

### 🎯 Banner (Hero Section)

* Full-width responsive banner with background image
* Overlay with:

  * Heading
  * Description
  * Call-to-Action button (Shop Now)
* Uses:

  * Background image with `fixed` attachment
  * Dark overlay for readability
* Enhances first impression and engagement

---

### 🔀 Routing

* Implemented using React Router
* Pages:

  * Home
  * Product
  * About
  * Contact
  * 404 Error Page

---

### 🎨 UI & Design

* Tailwind CSS based modern UI
* Gradient background layout
* Fully responsive design
* Clean component-based structure

---

### 🔄 Reusable Components

* Navbar (with location + dropdown)
* Banner (Hero section)
* Carousel (optional UI enhancement)
* Filter Bar
* Product Card (assumed in Product page)

---

## 🧱 Tech Stack

* **Frontend:** React.js
* **Routing:** react-router-dom
* **State Management:** Context API
* **HTTP Client:** Axios
* **Styling:** Tailwind CSS
* **APIs Used:**

  * Fake Store API (Products)
  * Geoapify API (Location)



## ⚙️ Environment Variables

Create a `.env` file:

```env
VITE_GEOAPIFY_KEY=your_api_key_here
```

---

## 🧠 Core Logic

### 📍 Location Detection Flow

1. Get user coordinates via browser
2. Send request to Geoapify API
3. Extract and store:

   * Country
   * State
   * City/Town
4. Pass location to Navbar

---

### 📦 Data Fetching (Context API)

* `fetchAllData()` fetches products
* Stored in global state
* Access via custom hook

---

### 🧭 Category Handling

* Extract categories from API response
* Render category buttons/tabs
* Filter products based on selected category

---

### 🔍 Filtering Logic

* Apply filters on:

  * Category
  * Search input
* Can be extended to:

  * Price range
  * Ratings
  * Sorting (Low → High, High → Low)

---

### 🎯 Banner Logic

* Static image from `/public/images/banner.jpg`
* Overlay using Tailwind:

  * `bg-black/60`
* Responsive typography & CTA button

---

### 🔀 Routing Setup

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/product" element={<Product />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<h1>404 - Error</h1>} />
</Routes>
```



