# 🔐 React Login System (Redux Toolkit + Redux Persist)

A simple yet powerful **React authentication state management system** using **Redux Toolkit** and **Redux Persist**. This project demonstrates how to manage login state globally and persist user data across page reloads.

---

# 📌 Features Overview

## 🔑 Authentication State Management

* Global login state using **Redux Toolkit**
* Stores user credentials (username & password)
* Supports:

  * Login (set user)
  * Logout (remove user)

---

## 💾 Persistent Login (Remember Me)

* Uses **redux-persist**
* Saves user data in **localStorage**
* Automatically restores login state after refresh

---

## 🧠 Redux Toolkit (Slice-Based Architecture)

* Clean and scalable state management
* Uses `createSlice` for reducers + actions

---

## 🧾 Login Form

* Controlled form using React `useState`
* Inputs:

  * Username (email)
  * Password
* “Remember Me” checkbox to persist login

---

## 🎯 Real-Time State Sync

* Form auto-fills if user data exists in Redux store
* Syncs UI with persisted state

---

# 🧠 Core Logic

## 📦 Login Slice (Redux Toolkit)

```js id="7pz9y2"
const loginSlice = createSlice({
  name: 'login',
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
      return state;
    },
    removeUser: (state) => {
      state = null;
      return state;
    }
  }
});
```

### ✅ Actions:

* `setUser` → stores user data
* `removeUser` → clears user data

---

## 🏪 Store Configuration (Redux Persist)

```js id="1h3c1v"
const setup = {
  key: 'codingott',
  version: 1,
  storage: storage
};

const slices = combineReducers({
  loginSlice
});

const store = configureStore({
  reducer: persistReducer(setup, slices),
  devTools: true,
  middleware: (config) => config({
    serializableCheck: false
  })
});
```

### 🔍 Key Points:

* Uses `persistReducer` to persist Redux state
* Storage: `localStorage`
* Disables serializable check (required for redux-persist)

---

## 🧾 Login Logic

```js id="f2s8a1"
const rememberMe = (e) => {
  if (e.target.checked) {
    dispatch(setUser(formValue));
  } else {
    dispatch(removeUser());
  }
};
```

### ✅ Behavior:

* Checkbox checked → Save user in Redux + localStorage
* Checkbox unchecked → Remove user from store

---

## 🧠 State Access

```js id="9d7m2x"
const { loginSlice } = useSelector((state) => state);
```

* Access global login state
* Used to pre-fill form fields

---

## 🧩 Components Breakdown

## 🔐 Login Component

* Controlled form
* Handles:

  * Input changes
  * Form submit
  * Remember Me toggle

### Features:

* Auto-fill inputs from Redux state
* Persistent login support
* Clean Tailwind UI

---



# 🧱 Tech Stack

* **React.js**
* **Redux Toolkit**
* **React Redux**
* **Redux Persist**
* **Tailwind CSS**


