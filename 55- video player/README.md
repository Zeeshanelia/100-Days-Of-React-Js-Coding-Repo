# React video player app

A sleek and modern custom video player built with React. This project demonstrates how to create your own media player with full control over playback, progress tracking, file uploads, and fullscreen functionality.

🚀 Features
▶️ Play / Pause control
📂 Upload and play custom video files
⏱️ Display current time & duration
📊 Progress bar with real-time updates
🔇 Mute / Unmute toggle
🖥️ Fullscreen mode
🎨 Stylish UI with gradients and Tailwind CSS
⚡ Smooth animations and responsive controls


🎮 How It Works
📌 Video Control
Uses useRef to directly control the <video> element.
Toggles play/pause using .play() and .pause() methods.
📌 File Upload
Users can upload local video files.
URL.createObjectURL() is used to generate a playable video URL.
📌 Time Tracking
onLoadedMetadata → sets video duration
onTimeUpdate → updates current playback time and progress bar
📌 Progress Bar
Dynamically updates width based on playback percentage.
📌 Audio Control
Toggle mute using video.muted.
📌 Fullscreen Mode
Uses Fullscreen API:
requestFullscreen()
exitFullscreen()

🧠 State Management
State	Purpose
playing	Track play/pause state
muted	Track mute status
currentTime	Current playback time
duration	Total video duration
progress	Progress bar percentage
src	Video source URL

 ![alt text](public/video-player.png)