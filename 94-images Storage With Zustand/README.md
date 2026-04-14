# 📦 Image Storage App

A modern React-based image storage application that allows users to upload, preview, download, and delete images directly in the browser. Built with Zustand for state management and Tailwind CSS for styling.



## 🚀 Features

* 📤 Upload images (max 5MB)
* 🖼️ Preview uploaded images instantly
* 📥 Download images anytime
* 🗑️ Delete images from UI
* ⚡ Fast state management using Zustand
* 🎨 Clean and responsive UI with Tailwind CSS
* 🔔 Toast notifications for better UX



## 🛠️ Tech Stack

* **React** (Frontend)
* **Zustand** (State Management)
* **Tailwind CSS** (Styling)
* **React Toastify** (Notifications)
* **Lucide React** (Icons)

---

## 📁 Folder Structure

```
src/
│
├── components/
│   └── (optional reusable components)
│
├── zustand/
│   └── useImageStore.js   # Zustand store
│
├── App.jsx                # Main component
├── main.jsx               # Entry point
└── index.css              # Tailwind styles
```

---





## 🧠 How It Works

### Image Upload Flow

1. User selects an image file
2. File is validated:

   * Must be an image
   * Must be less than 5MB
3. FileReader converts image to Base64
4. Image data is stored in Zustand store
5. UI updates instantly

---

### Zustand Store Logic

* `images`: Stores all uploaded images
* `setImage()`: Adds a new image
* `deleteImage()`: Removes image by ID



## ⚠️ Limitations

* Images are stored in memory (not persisted)
* Refreshing the page will remove all images
* Large number of images may affect performance



## 🔥 Future Improvements

* 💾 Add LocalStorage persistence
* 📦 Add image compression before upload
* 🖱️ Drag & Drop upload support
* ☁️ Cloud storage integration (Firebase / AWS S3)
* 🔍 Search & filter images



## 📸 Screenshots





## 👨‍💻 Author

Zeeshan Elia
