# 🛒 E-Commerce Cart System (React + Redux Toolkit)

A scalable and production-ready **E-Commerce Cart Application** built using **React** and **Redux Toolkit**. This project demonstrates **asynchronous data fetching**, **global state management**, and **cart logic handling**—all essential for frontend interviews and real-world apps.

---

## 🚀 Features

* 🛍 Fetch products from API (async handling)
* ➕ Add items to cart
* ➖ Decrease item quantity
* ❌ Remove items from cart
* 🧹 Clear entire cart
* 💰 Auto calculation of total amount
* 🔢 Total quantity tracking
* ⚡ Optimized state updates using Redux Toolkit
* 📱 Responsive UI

---

## 🧠 Core Concepts Used

* **Redux Toolkit (RTK)** → Simplified Redux logic
* **createSlice** → Reducers + actions together
* **createAsyncThunk** → API calls & async state
* **React-Redux Hooks** → `useSelector`, `useDispatch`
* **Axios** → API fetching
* **Derived State Logic** → totals calculation




---

## ⚙️ State Management Architecture

### 1. Products Slice (Async Data Fetching)

```js id="e5q3tp"
createAsyncThunk('products/fetchProducts', async () => {...})
```

### State:

* `items` → Product list
* `status` → idle | loading | succeeded | failed
* `error` → Error message

### Flow:

| Action    | State Change     |
| --------- | ---------------- |
| pending   | loading          |
| fulfilled | succeeded + data |
| rejected  | failed + error   |

👉 Handles full async lifecycle cleanly.

---

### 2. Cart Slice (Business Logic)

#### State:

```js id="b4q1k0"
{
  items: [],
  totalQuantity: 0,
  totalAmount: 0
}
```

---

### Actions:

#### ➕ Add to Cart

```js id="1szr0z"
addToCart(state, action)
```

* If item exists → increase quantity
* Else → add new item
* Updates:

  * totalQuantity
  * totalAmount

---

#### ➖ Decrease Quantity

```js id="pc5nl7"
decreaseQuantity(state, action)
```

* Prevents quantity < 1
* Updates totals accordingly

---

#### ❌ Remove Item

```js id="z8xv8w"
removeFromCart(state, action)
```

* Removes item completely
* Deducts total price & quantity

---

#### 🧹 Clear Cart

```js id="mjvbg2"
clearCart(state)
```

* Resets entire cart state

---

## 🧩 Components Breakdown

### 🔹 Cart Component

* Displays:

  * All cart items
  * Total price
* Handles:

  * Empty cart UI
  * Clear cart action

```jsx id="1ljf27"
const { items, totalPrice } = useSelector(state => state.cart);
```

---

### 🔹 CartItem Component

* Shows:

  * Product image
  * Title
  * Price
  * Quantity controls

#### Actions:

* ➕ Increase quantity
* ➖ Decrease quantity
* ❌ Remove item

```jsx id="kt9y1x"
dispatch(addToCart(item))
dispatch(decreaseQuantity(item.id))
dispatch(removeFromCart(item.id))
```

---

## 🌐 API Used

```bash id="txxqf0"
https://fakestoreapi.com/products?limit=12
```

* Returns product list with:

  * id, title, price, image

---

## 📦 Installation

```bash id="86r0cg"
npm install
npm install @reduxjs/toolkit react-redux axios
```

---

## ▶️ Usage

### 1. Setup Store

```js id="6j7wd6"
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productsReducer from './features/products/productsSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});
```

---

### 2. Wrap App

```jsx id="gx2o1v"
import { Provider } from 'react-redux';

<Provider store={store}>
  <App />
</Provider>
```

---

### 3. Dispatch API Call

```js id="fxbq8f"
dispatch(fetchProducts());
```
