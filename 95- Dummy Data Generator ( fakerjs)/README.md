# 🧪 Dummy Data Generator (React + Faker.js)

A powerful and flexible **Dummy Data Generator App** built with **React**, designed to generate realistic mock data for development, testing, and prototyping.

This tool allows developers to quickly create structured JSON datasets such as users, products, payments, and employees with just a few clicks.

---

## 🚀 Features

* ⚡ Generate realistic dummy data instantly
* 📊 Supports multiple data types:

  * Users
  * Products
  * Payments
  * Employees
* 🔢 Custom number of records (up to 100)
* 📋 One-click copy to clipboard
* 🧾 Syntax-highlighted JSON output
* 🎨 Clean UI using Ant Design
* ✨ Smooth animations with Animate.css
* ⚠️ Error & success messages

---

## 🛠️ Tech Stack

* **Frontend:** React (Hooks)
* **UI Library:** Ant Design (antd)
* **Data Generator:** Faker.js (`@faker-js/faker`)
* **Unique IDs:** nanoid
* **Syntax Highlighting:** react-syntax-highlighter
* **Icons:** Lucide React
* **Styling:** Tailwind CSS + Animate.css

---

## 📂 Project Structure

```id="fs12ad"
src/
│
├── App.jsx        # Main application logic
├── index.js       # Entry point
```


## 🧠 Core Functionality

### 1. Data Types Supported

#### 👤 Users

* Full name, email, phone
* Address, city, country
* Gender, pincode
* Created timestamp

#### 🛒 Products

* Title, description
* Price, discount, rating
* Category, brand, image

#### 💳 Payments

* User + Product reference
* Amount, tax
* Order ID, Transaction ID
* Payment method

#### 👨‍💼 Employees

* Name, email, phone
* Salary, designation
* Address details

---

### 2. Data Generation Logic

* Uses Faker.js to simulate real-world data
* Loop runs based on user input (`noOfData`)
* Output is converted to formatted JSON:

```id="k29sdf"
JSON.stringify(data, null, 4)
```

---

### 3. Copy to Clipboard

```id="x92lsk"
navigator.clipboard.writeText(payload)
```

* Copies generated JSON instantly
* Shows success/error message

---

### 4. Conditional Rendering

* Shows **Empty state** before generation
* Displays **formatted JSON** after generation

---

## 🎨 UI Highlights

* Minimal and developer-friendly design
* Form-based input system
* Syntax-highlighted output (dark theme)
* Responsive centered layout
* Copy icon with tooltip

---

## ⚠️ Known Limitations

* No file export (JSON download missing)
* Data is not persisted (refresh resets output)
* Limited to 100 records per generation
* Static payment method ("UPI")




