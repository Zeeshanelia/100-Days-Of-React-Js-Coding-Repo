# 🎵 YouTube Playlist Manager (React + Zustand)

A modern and interactive **YouTube Playlist Manager** built with React. This app allows users to create playlists, add YouTube videos, and manage them with a clean and responsive UI.

---

## 🚀 Features

* 📂 Create custom playlists
* ➕ Add YouTube videos via URL
* 🖼️ Auto-fetch video thumbnails
* ▶️ Play videos directly (redirect to YouTube)
* 🗑️ Delete videos from playlist
* 📊 Filter videos by playlist
* 🕒 Display upload date with formatting
* 💾 Persistent state using Zustand
* 🎨 Beautiful UI with Tailwind CSS & Ant Design

---



## 🧠 How It Works

### 📌 Playlist Management

* Users can create playlists dynamically
* Stored using Zustand global state

### 📌 Add Video

* Accepts a valid YouTube URL
* Extracts video ID using `get-youtube-id`
* Generates thumbnail:

```id="thumbcode"
https://img.youtube.com/vi/{videoId}/mqdefault.jpg
```

### 📌 Video Data Stored

Each video includes:

* `id` (YouTube video ID)
* `title`
* `url`
* `playlist`
* `thumbnail`
* `date`

---

## 🧭 App Flow

1. Create a playlist
2. Add videos to playlist
3. Browse playlists from sidebar
4. Play or delete videos

---

## 🧩 UI Components

### 🔹 Sidebar

* Displays all playlists
* Filter videos by selected playlist

### 🔹 Navbar

* Shows active playlist
* Buttons for:

  * Add Video
  * Create Playlist

### 🔹 Video Cards

* Thumbnail preview
* Title (with tooltip)
* Date (formatted using Moment.js)
* Play & Delete actions

### 🔹 Modals

* Create Playlist Modal
* Add Video Modal (with validation)



 ![alt text](public/Playlsit-Manager.png)