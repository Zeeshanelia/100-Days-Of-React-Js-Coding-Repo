# 🧩 Dynamic JSON Generator (React)

A clean and interactive **Dynamic Input Builder** that allows users to create key-value pairs dynamically and generate a formatted JSON object in real-time. Ideal for practicing form handling, dynamic UI rendering, and state management in React.

---

## 🚀 Features

* ➕ Add unlimited key-value input fields
* ❌ Remove fields dynamically
* ⚠️ Detect duplicate keys with warning
* 🧠 Auto-generate JSON output
* 📋 Copy JSON to clipboard
* ⚡ Real-time UI updates
* 🎨 Minimal and modern interface

---

## 🛠 Tech Stack

* **React 18** – UI development
* **Nanoid** – Unique ID generation
* **Lucide React** – Icons
* **Tailwind CSS** – Styling

---



## ⚡ How It Works

### 1. Add Fields

* Click **"Add field"** to create new key-value inputs
* Each field gets a unique ID using `nanoid`

### 2. Update Values

* Enter **key** and **value**
* State updates dynamically for each field

### 3. Duplicate Detection

* Automatically checks for duplicate keys
* Shows warning if duplicates exist

### 4. Generate JSON

* Click **Submit**
* Converts inputs into a JSON object

```js id="m3k9fp"
{
  "name": "Zeeshan",
  "role": "Frontend Developer"
}
```

### 5. Copy Output

* Click **Copy** button
* JSON is copied to clipboard with feedback

---

## 🧠 Core Concepts Used

* React Hooks (`useState`)
* Dynamic form handling
* Immutable state updates
* Array mapping & filtering
* Clipboard API (`navigator.clipboard`)
* Conditional rendering

---

## 🔍 Key Logic Breakdown

### 📌 Generate Object from Fields

```js id="a7x2pz"
const obj = {}
for (const field of fields) {
  obj[field.key] = field.value
}
```

### 📌 Detect Duplicate Keys

```js id="r5t1vm"
const keys = fields.map(f => f.key).filter(k => k.trim())
return keys.filter((k, i) => keys.indexOf(k) !== i)
```


