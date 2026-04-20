## E-Commerce Cart Application
Best Use Case of UseState with different functionality. A simple and responsive E-Commerce Cart Application built with React. This project demonstrates product listing, cart management, routing, and dynamic UI updates using modern React practices.


---

## 🚀 Features

* 🏠 Home page with product listing
* 🛒 Add to cart functionality
* 🔢 Dynamic cart item count
* 🧺 Cart page with product management
* ✅ Success page after checkout
* 🧭 Routing with React Router
* 🎨 UI styled using Bootstrap & Font Awesome

---


## 🧠 How It Works

### 📌 Product Selection

* Products are stored in a local `data.js` file.
* When a user selects a product, its `id` is stored in state.

### 📌 Cart Management

* `useEffect` listens for changes in `productId`
* Filters product from list and adds it to cart array
* Cart updates dynamically

### 📌 State Used

| State            | Purpose                    |
| ---------------- | -------------------------- |
| `productId`      | Stores selected product ID |
| `cartAllProduct` | Stores all cart items      |

---

## 🧭 Routing

| Route      | Component  | Description          |
| ---------- | ---------- | -------------------- |
| `/`        | Home       | Product listing page |
| `/cart`    | Cart       | View cart items      |
| `/success` | Successful | Order success page   |

---

## 🧩 Components Overview

### 🔹 Header

* Navigation bar
* Cart icon with item count badge
* Links to Home, About, Contact, Cart

### 🔹 Home

* Displays product list
* Allows adding products to cart

### 🔹 Cart

* Displays selected products
* Allows cart updates/removal

### 🔹 Successful

* Confirmation screen after checkout




- cd backend
- npm start




