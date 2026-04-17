# 🎙️ Voice Recorder App

A modern and minimal **Voice Recorder Web App** built with React that allows users to record audio directly from their browser, play it back, and download it.



## 🚀 Features

* 🎤 Record audio using browser microphone
* ⏱️ Live recording timer (MM:SS format)
* ⏹️ Start / Stop recording controls
* 🔊 Playback recorded audio
* 💾 Download audio file (`.webm`)
* ✨ Smooth UI animations using `animate.css`
* 📱 Responsive and clean UI with Tailwind CSS



## 🧠 How It Works

This app uses the **MediaRecorder API** to capture audio input from the user’s microphone.

### Core Flow:

1. Request microphone access using:

   ```js
   navigator.mediaDevices.getUserMedia({ audio: true })
   ```

2. Initialize `MediaRecorder` with the audio stream

3. Start recording and collect audio chunks

4. On stop:

   * Combine chunks into a `Blob`
   * Generate a playable URL using `URL.createObjectURL`
   * Display audio player

5. Allow user to download the recorded file

---







## 📌 Important Code Concepts

### 🎤 Recording Logic

* Uses `MediaRecorder` to capture audio stream
* Stores chunks in `useRef` to persist across renders

### ⏱️ Timer

* Uses `setInterval` to update recording duration every second
* Cleared properly using `clearInterval` to prevent memory leaks

### 🔊 Audio Playback

* Converts recorded chunks into a `Blob`
* Creates a temporary URL for playback

### 💾 Download Feature

* Dynamically creates an `<a>` tag
* Triggers download without server

