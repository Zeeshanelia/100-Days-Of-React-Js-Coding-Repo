# 🔥 Firebase CRUD App (React + Ant Design)

A complete **CRUD (Create, Read, Update, Delete) application** built with React and Firebase Firestore. This project demonstrates real-world data management with a clean UI using Ant Design and smooth user interactions.

---

## 🚀 Features

* ➕ Create new user records
* 📄 Fetch and display data from Firestore
* ✏️ Edit existing records
* ❌ Delete records
* 📅 Timestamp tracking (createdAt)
* 📊 Data table with responsive layout
* 🔔 Success & error messages
* 🎨 Smooth UI animations

---

## 🛠 Tech Stack

* **React 18** – Frontend framework
* **Firebase Firestore** – NoSQL database
* **Ant Design (antd)** – UI components & forms
* **Moment.js** – Date formatting
* **Lucide React** – Icons
* **Animate.css** – Animations
* **Tailwind CSS** – Styling


## ⚡ How It Works

### 1. Create Record

* Opens modal form
* Submits data to Firestore using `addDoc`

### 2. Fetch Records

* Uses `getDocs()`
* Stores data in state and displays in table

### 3. Update Record

* Pre-fills form with selected row data
* Updates using `updateDoc()`

### 4. Delete Record

* Deletes document using `deleteDoc()`
* Refreshes UI automatically

---

## 🧠 Core Concepts Used

* React Hooks (`useState`, `useEffect`)
* Firebase Firestore operations
* Controlled forms with Ant Design
* Modal-based form UX
* Dynamic table rendering
* State-driven re-fetching (`updateCount`)

---

## 🔍 Key Logic Breakdown

### 📌 Fetch Data

```js id="n4x8pa"
const res = await getDocs(User)
const data = res.docs.map(doc => ({
  id: doc.id,
  ...doc.data()
}))
```

### 📌 Update Record

```js id="r7c1ye"
const docRef = doc(db, "users", editId)
await updateDoc(docRef, values)
```

### 📌 Delete Record

```js id="d2v5kf"
const docRef = doc(db, "users", id)
await deleteDoc(docRef)
```

---


