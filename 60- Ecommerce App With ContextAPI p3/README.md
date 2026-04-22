# 🚀 React E-Commerce Frontend (Geo Location Based)

A modern, responsive React application that fetches product data from an external API and enhances user experience by detecting the user’s real-time location using the browser’s Geolocation API and reverse geocoding.

---

## 📌 Features

* 🌍 **User Location Detection**

  * Uses browser Geolocation API
  * Converts coordinates into country, state, and city using Geoapify API

* 🛍️ **Product Listing**

  * Fetches up to 200 products from Fake Store API
  * Global state management using Context API

* 🔀 **Client-Side Routing**

  * Implemented using React Router
  * Pages:

    * Home
    * Product
    * About
    * Contact
    * 404 Error Page

* 🎨 **Modern UI**

  * Tailwind CSS styling
  * Gradient background and responsive design
  * Banner section with CTA

* 🔄 **Reusable Components**

  * Navbar with location dropdown
  * Banner (Hero section)
  * Carousel (for showcasing content)

---

## 🧱 Tech Stack

* **Frontend:** React.js
* **Routing:** react-router-dom
* **State Management:** Context API
* **HTTP Client:** Axios
* **Styling:** Tailwind CSS
* **API Services:**

  * Fake Store API (Products)
  * Geoapify API (Reverse Geocoding)

---


## 🧠 Core Logic Explained

### 📍 Geolocation Handling

* Uses `navigator.geolocation.getCurrentPosition`
* Fetches latitude & longitude
* Sends request to Geoapify reverse geocoding API
* Extracts:

  * Country
  * State
  * City / Town

---

### 📦 Data Fetching (Context API)

* Global state using `createContext`
* `fetchAllData()` fetches products from API
* Data is accessible anywhere via custom hook

---

### 🔀 Routing Setup

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/product" element={<Product />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<About />} />
</Routes>
```

---

### ❌ 404 Page

Handles all undefined routes:

```jsx
<Route path="*" element={<h1>404 - Error</h1>} />
```


