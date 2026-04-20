# 🌍 React E-Commerce App (Geo Location + Context API)

A modern **React E-Commerce Frontend** with **user location detection**, **product fetching via API**, and **global state management using Context API**. This project demonstrates how to build a scalable frontend with real-world features.

---

## 🚀 Features

* 🌍 Detect user location (Latitude & Longitude)
* 📍 Reverse geocoding using Geoapify API
* 🛍️ Fetch products from Fake Store API
* 🌐 Global state management using Context API
* 🔄 Centralized data fetching
* 🧭 Routing with React Router
* 🎨 Responsive UI with Tailwind CSS

---

## 🌍 Geolocation Feature

* Uses browser **Geolocation API**
* Converts coordinates into readable location via Geoapify

```id="geoctx"
https://api.geoapify.com/v1/geocode/reverse?lat={lat}&lon={lon}&apiKey=API_KEY
```

---

## 🛍️ Product Data (Context API)

### 📌 Data Provider

Global state is handled using React Context API:

```js id="contextcode"
export const DataContext = createContext(null);
```

### 📌 Features

* Fetch products from API:

```id="fakeapi"
https://fakestoreapi.com/products?limit=200
```

* Store data globally
* Access data from any component

---

### 📌 Available Context Values

| Value          | Description                  |
| -------------- | ---------------------------- |
| `data`         | All fetched products         |
| `setData`      | Update product list manually |
| `fetchAllData` | Fetch products from API      |

---

### 📌 Usage Example

```js id="usectx"
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";

const Home = () => {
  const { data, fetchAllData } = useContext(DataContext);

  useEffect(() => {
    fetchAllData();
  }, []);

  return <div>{data.length} Products Loaded</div>;
};
```

---

## 🧭 Routing

| Route      | Component |
| ---------- | --------- |
| `/`        | Home      |
| `/product` | Product   |
| `/about`   | About     |
| `/contact` | Contact   |
| `*`        | 404 Page  |

---

## 🧩 Components Overview

### 🔹 Navbar

* Displays location
* Navigation links

### 🔹 Carousel

* Homepage banner/slider

### 🔹 Pages

* **Home** → Displays products
* **Product** → Product details/list
* **About** → About page
* **Contact** → Contact page



npm install react-slick