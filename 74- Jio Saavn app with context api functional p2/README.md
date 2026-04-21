# 🎵 Music Streaming UI (React + Context API)

A modern **Music Streaming Frontend Application** inspired by platforms like JioSaavn. Built using **React**, **Context API**, and **Tailwind CSS**, this project focuses on **component-driven architecture**, **global state management**, and **interactive audio controls**.

---

## 🚀 Features

* 🎧 Play songs with global state control
* ⏯ Play / Pause / Next / Previous controls
* 📊 Dynamic album slider (horizontal scroll)
* 🔍 Live song search using API
* 📁 Album-based navigation
* 🎚 Volume controller with hover interaction
* 📥 Download song functionality
* 📱 Fully responsive UI
* ⚡ Smooth UI animations & transitions

---

## 🧠 Core Concepts Used

* **React Context API** → Global music state
* **Custom Hooks (useContext)** → Shared logic
* **useRef & useEffect** → Audio & DOM control
* **Axios** → API calls
* **Component Composition** → Reusable UI blocks
* **Tailwind CSS** → Utility-first styling



## ⚙️ Application Architecture

### 1. Global Music State (Context API)

The `MusicProvider` manages:

* `currentSong`
* `isPlaying`

### Available Actions:

```js
playMusic(downloadUrl, name, duration, image, id, primaryArtists)
nextSong()
prevSong()
```

👉 Enables centralized control of the player across the app.

---

### 2. Player System

The `Player` component handles:

* 🎵 Audio playback lifecycle
* ⏱ Progress tracking using `timeupdate`
* 🔄 Auto-play next song on end
* 📊 Seek functionality (range input)
* 📥 Song download

```js
audioElement.addEventListener("timeupdate", handleTimeUpdate);
audioElement.addEventListener("ended", nextSong);
```

---

### 3. Search Functionality

```js
axios.get(`https://saavn.me/search/songs?query=${value}`)
```

* Fetches songs dynamically
* Handles:

  * Empty input
  * No results
* Updates UI in real-time

---

### 4. Album Slider

* Horizontal scroll using `useRef`
* Manual navigation buttons (left/right)
* Grid-based layout for smooth UX

---

### 5. Song List

Each song item:

* ▶ Click to play
* 🎨 Highlights currently playing song
* ⏱ Converts duration into `mm:ss` format

---

### 6. Volume Controller

* Appears on hover
* Uses `useLayoutEffect` for sync with audio
* Controls HTML audio element volume (0–1)

---

## 🎨 UI Components Breakdown

### 🔹 AlbumItem

* Displays album image + artist names
* Handles long text truncation
* Navigates to album details page

---

### 🔹 Navbar

* Logo + navigation links
* Search input (API integrated)
* Language selector UI

---

### 🔹 Player

* Sticky bottom music player
* Controls playback + progress bar
* Includes download + volume UI

---

### 🔹 Slider

* Scrollable album list
* Optimized for large datasets

---

### 🔹 SongsList

* Displays song metadata
* Interactive play button
* Active song highlighting

---

### 🔹 VolumeController

* Vertical slider (rotated UI)
* Smooth volume adjustments

---

## ⚠️ Current Limitations

* ❌ `nextSong()` and `prevSong()` not implemented
* ❌ No real backend (API is public)
* ❌ No playlist management
* ❌ No authentication system

---

## 📦 Installation

```bash
npm install axios react-icons
```

---

## ▶️ Usage

Wrap your app with provider:

```jsx
<MusicProvider>
  <App />
</MusicProvider>
```

Access global state:

```jsx
const { currentSong, playMusic } = useContext(MusicContext);
```

---

## 🌐 API Used

* **Saavn Unofficial API**

```
https://saavn.me/search/songs
```


## 🧪 Edge Cases Handled

* No song selected → skeleton loader UI
* Empty search → clears results
* Long artist names → truncated display
* Audio sync issues → handled via event listeners



## ⭐ Final Note

This is a **strong frontend portfolio project** that demonstrates:

✔ Real-world app structure
✔ Complex state handling
✔ Media control logic
✔ API integration


