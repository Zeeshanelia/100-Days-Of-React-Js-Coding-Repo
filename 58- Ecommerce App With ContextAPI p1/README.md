# 🌍 React E-Commerce App (Location + Auth + Routing)

A modern **React E-Commerce Frontend** with geolocation support, authentication (Clerk), and dynamic routing. This project demonstrates how to build a scalable UI with location detection and user session handling.

---

## 🚀 Features

* 🌍 Detect user location (Latitude & Longitude)
* 📍 Reverse geocoding using OpenStreetMap API
* 🔐 Authentication with Clerk
* 🧭 Routing with React Router
* 🛒 Shopping cart icon with badge
* 🎨 Clean UI with Tailwind CSS & Lucide Icons
* 📱 Responsive navigation bar

---




## 🌍 Geolocation Feature

* Uses browser's **Geolocation API**
* Retrieves:

  * Latitude
  * Longitude
* Sends request to OpenStreetMap reverse geocoding API:

```id="geoapi"
https://nominatim.openstreetmap.org/reverse?lat={lat}&lon={lon}&format=json
```

### Flow:

1. App loads
2. Requests location permission
3. Fetches coordinates
4. Calls API using Axios
5. Logs location data

---

## 🔐 Authentication (Clerk)

* Integrated using `@clerk/clerk-react`
* Supports:

  * Sign In
  * User Profile (avatar)
* UI auto-switches based on auth state:

| State      | UI Element     |
| ---------- | -------------- |
| Signed Out | Sign In Button |
| Signed In  | User Avatar    |

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

* Logo & navigation links
* Location placeholder
* Cart icon with count
* Authentication controls

### 🔹 Pages

* **Home** → Landing page
* **Product** → Product listing
* **About** → About page
* **Contact** → Contact page




