# 🎨 Visiting Card Generator (React)

A lightweight and interactive **Visiting Card Generator** built with React. This tool allows users to create custom cards by adding images, text, and positioning elements dynamically, then exporting the final design as an image.

---

## 🚀 Features

* 🖼 Upload background image
* ✏️ Add multiple text fields (Title, Subtitle, Small text)
* 🎯 Drag & drop text positioning
* ⚡ Real-time preview
* 📸 Export card as PNG image
* 🎨 Clean and minimal UI

---

## 🛠 Tech Stack

* **React 18** – UI development
* **html2canvas** – Convert UI into downloadable image
* **Lucide React** – Modern icons
* **Tailwind CSS** – Styling and layout

---



## ⚙️ How It Works

### 1. Add Image

* Upload any image as card background
* Automatically fills the card container

### 2. Add Text

* Choose between:

  * Title
  * Subtitle
  * Small text
* Input field appears dynamically
* Text is added to the card

### 3. Drag & Position

* Each text element is draggable
* Position updates based on drop coordinates

### 4. Download Card

* Uses **html2canvas** to capture card
* Converts to PNG
* Automatically downloads

---


## 🧠 Core Concepts Used

* React Hooks (`useState`, `useRef`)
* Controlled form inputs
* Dynamic UI rendering
* Drag and drop positioning
* DOM manipulation with `getBoundingClientRect`
* Canvas rendering using `html2canvas`

---

## 🔍 Key Logic Breakdown

### 📌 State Management

* `card` object stores:

  * Image
  * Text labels
  * X/Y positions

### 📌 Drag Handling

```js
const leftPosition = Math.max(0, Math.round(dragX - rec.left))
const topPosition = Math.max(0, Math.round(dragY - rec.top))
```

Ensures text stays inside card boundaries.

### 📌 Image Export

```js
const canvas = await html2canvas(div, 3)
const url = canvas.toDataURL("image/png")
```

Captures UI and converts to downloadable image.

---

## 📸 UI Overview

* Left side: Controls (image + text options)
* Center: Card preview
* Bottom: Download button




