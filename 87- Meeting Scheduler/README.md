# 🗓️ Meeting Scheduler (React)

A clean and efficient **Meeting Scheduler** web application that allows users to create meetings and instantly add them to **Google Calendar** with proper date, time, and timezone handling.

---

## 🚀 Features

* 📅 Schedule meetings with title & description
* ⏰ Select start and end date/time
* 🌍 Timezone-aware scheduling using Moment Timezone
* 🔗 One-click redirect to Google Calendar event creation
* ✨ Smooth UI animations
* 🎯 Form validation with Ant Design

---

## 🛠 Tech Stack

* **React 18** – Component-based UI
* **Moment Timezone** – Date & timezone formatting
* **Ant Design (antd)** – UI components & form handling
* **Animate.css** – UI animations
* **Lucide React** – Icon library
* **Tailwind CSS** – Styling

---



## ⚡ How It Works

### 1. User Input

* Enter meeting title
* Add description
* Select start & end date/time

### 2. Timezone Conversion

* Uses `moment-timezone` to convert selected time into **Asia/Kolkata** format
* Ensures compatibility with Google Calendar

### 3. Google Calendar Integration

* Generates a pre-filled event URL
* Redirects user to Google Calendar

```js id="8yr0r3"
const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startsAt}/${endsAt}&details=${description}&ctz=Asia/Kolkata`
```

---

## 🧠 Core Concepts Used

* Controlled forms with Ant Design
* Date handling and formatting
* URL encoding (`encodeURIComponent`)
* External service integration (Google Calendar)
* UI animations and transitions

---

## 📸 UI Overview

* 📌 Centered card layout
* 📝 Input fields for meeting details
* 📅 Date-time pickers
* 🚀 Action button to schedule meeting

---


