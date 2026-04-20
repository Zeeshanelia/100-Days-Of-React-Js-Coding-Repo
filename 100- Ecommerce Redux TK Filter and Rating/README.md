# 🛒 Shopping E-Store (React + Context API)

A modern **E-commerce frontend application** built with **React**, using **Context API + useReducer** for global state management. This project demonstrates real-world shopping cart functionality including product filtering, cart operations, and persistent state using localStorage.

---

## 🚀 Features

### 🔍 Product Search

* Real-time filtering of products based on user input
* Case-insensitive search
* Automatically resets to all products when input is cleared

### 🛍️ Shopping Cart

* Add / Remove products
* Increment / Decrement product quantity
* Dynamic cart badge (shows total items)
* Subtotal calculation in real-time

### 💾 Persistent State

* Cart data is stored in `localStorage`
* Automatically restores cart on page reload

### 📦 Fake Product Data

* Generated using **@faker-js/faker**
* Includes:

  * Product name
  * Description
  * Price
  * Image
  * Stock availability
  * Delivery speed
  * Ratings

### 📱 Responsive UI

* Mobile-friendly navbar with drawer menu
* Clean UI using utility-first CSS (likely Tailwind / DaisyUI)

---

## 🧠 Tech Stack

* **React.js**
* **React Router DOM**
* **Context API**
* **useReducer**
* **@faker-js/faker**
* **React Icons**
* **Tailwind CSS / DaisyUI**

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Header/
│   │   └── Header.jsx
│   ├── CartProductCard/
│   │   └── CartProductCard.jsx
│
├── context/
│   └── cartContext/
│       ├── CartContext.jsx
│       └── cartReducer.js
│
├── pages/
│   └── home/
│       └── filterBar/
│           └── FilterBar.jsx
│
└── App.jsx
```

---

## ⚙️ Core Concepts Explained

### 1. Global State Management (Context + Reducer)

The app uses a centralized store:

```js
const [state, dispatch] = useReducer(cartReducer, {
  unfilteredProducts: products,
  products,
  cart: [],
});
```

#### Key Actions:

* `ADD_TO_CART`
* `REMOVE_FROM_CART`
* `INCREMENT_QUANTITY`
* `DECREMENT_QUANTITY`
* `SET_PRODUCTS`
* `SET_STATE`

---

### 2. Product Filtering Logic

```js
useEffect(() => {
  if (!searchValue) {
    dispatch({ type: "SET_PRODUCTS", payload: unfilteredProducts });
    return;
  }

  const filteredItems = unfilteredProducts.filter((p) =>
    p.productName.toLowerCase().includes(searchValue.toLowerCase())
  );

  dispatch({ type: "SET_PRODUCTS", payload: filteredItems });
}, [searchValue]);
```

✔ Efficient
✔ Real-time UX
✔ Clean separation of original vs filtered data

---

### 3. Cart Subtotal Calculation

```js
const subTotal = cart.reduce(
  (acc, curr) => acc + curr.price * curr.quantity,
  0
);
```

---

### 4. LocalStorage Persistence

```js
useEffect(() => {
  const sessionData = JSON.parse(localStorage.getItem("cartContextData"));
  if (!sessionData) return;

  dispatch({
    type: "SET_STATE",
    payload: sessionData,
  });
}, []);

useEffect(() => {
  localStorage.setItem("cartContextData", JSON.stringify(state));
}, [state]);
```

✔ Saves cart automatically
✔ Restores state on refresh

---

## 🧩 Key Components

### 🔹 Header

* Navigation bar
* Search input
* Cart dropdown with subtotal
* Mobile drawer (Filter sidebar)

### 🔹 CartContext

* Manages global state
* Generates fake product data
* Handles persistence

### 🔹 CartProductCard

* Displays product details
* Handles:

  * Add to cart
  * Remove from cart
  * Quantity controls




