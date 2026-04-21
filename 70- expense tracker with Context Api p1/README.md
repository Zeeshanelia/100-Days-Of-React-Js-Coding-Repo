#  Expense Tracker with Context Api ReactJs

A clean and scalable **Expense Management System** built with React using **Context API + useReducer** for state management and **Recharts** for data visualization. The app persists data in **localStorage**, ensuring your expenses are (saved) even after page refresh.

---

## 🚀 Features

*  Add new expenses with unique IDs
*  Update existing expenses
* Delete expenses
*  Persistent storage using `localStorage`
*  Global state management via Context API
* Error handling & loading states
*  Interactive bar chart visualization
*  Custom tooltip with formatted currency

---

## 🧠 Core Concepts Used

* **React Context API** → Global state sharing
* **useReducer Hook** → Predictable state management
* **Custom Hooks** → Clean and reusable logic (`useExpenses`)
* **LocalStorage API** → Data persistence
* **Recharts Library** → Data visualization

---




## ⚙️ How It Works

### 1. Global State (Context + Reducer)

* The `ExpenseContext` manages:

  * `expenses`
  * `loading`
  * `error`

* Actions handled:

  * `ADD_EXPENSE`
  * `DELETE_EXPENSE`
  * `UPDATE_EXPENSE`
  * `SET_EXPENSES`
  * `SET_LOADING`
  * `SET_ERROR`

👉 This ensures a **centralized and predictable state flow**.

---

### 2. Data Persistence

```js
useEffect(() => {
  localStorage.setItem("expenses", JSON.stringify(state.expenses));
}, [state.expenses]);
```

* Every time expenses update → automatically saved
* On reload → data is restored

---

### 3. Unique ID Generation

```js
id: crypto.randomUUID()
```

* Ensures each expense has a unique identifier
* Avoids collision issues

---

### 4. Custom Hook

```js
export const useExpenses = () => {...}
```

* Simplifies accessing global state
* Throws error if used outside provider (good practice)

---

## 📊 Chart Visualization

The `ExpenseBarChart` component:

* Converts object data → chart-friendly format
* Uses:

  * `BarChart`
  * `XAxis`, `YAxis`
  * `Tooltip`
  * `ResponsiveContainer`

### Key Features:

* 📉 Dynamic rendering
* 🎯 Custom tooltip UI
* 📱 Fully responsive
* 🔄 Reversed data order (latest first)

---

## 🎨 Example Chart Data Format

```js
{
  Food: 5000,
  Travel: 2000,
  Shopping: 3500
}
```

Converted into:

```js
[
  { name: "Food", amount: 5000 },
  { name: "Travel", amount: 2000 }
]
```

---

## ⚠️ Error Handling

* Catches `localStorage` failures
* Updates global error state
* Prevents silent crashes

---

## 🧪 Edge Cases Covered

* No data → shows "No expense data to display"
* Invalid context usage → throws explicit error
* Safe JSON parsing from localStorage

---

## 📦 Installation

```bash
npm install recharts
```

---

##  Usage

Wrap your app with the provider:

```jsx
<ExpenseProvider>
  <App />
</ExpenseProvider>
```

Access state anywhere:

```jsx
const { expenses, addExpense, deleteExpense } = useExpenses();
```

---







![Avatar](public/images/expense-tracker.png)
