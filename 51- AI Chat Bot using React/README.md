# 🤖 AI Chat App (React + Gemini API)

A modern **AI Chat Application** built with **React**, integrating **Google Gemini API** to generate intelligent responses in real-time. The app provides a clean chat interface with typing indicators, timestamps, and smooth animations.

---

## 🚀 Features

* 💬 Real-time chat with AI
* 🤖 AI responses using **Google Gemini (Generative Language API)**
* ⏱️ Message timestamps (formatted with Moment.js)
* ✨ Smooth animations using Animate.css
* 🔔 Error handling with toast notifications
* ⌨️ Typing indicator ("Typing...")
* 🎯 Controlled input field (React best practice)
* 📱 Responsive UI

---

## 🛠️ Tech Stack

* **Frontend:** React (Hooks)
* **HTTP Client:** Axios
* **Notifications:** React Toastify
* **Date Formatting:** Moment.js
* **Icons:** Lucide React
* **Styling:** Tailwind CSS + Animate.css
* **API:** Google Gemini API

---

## 📂 Project Structure

```id="b8c3a1"
src/
│
├── App.jsx        # Main chat logic and UI
├── index.js       # Entry point
├── styles/        # Optional styles
```



---

## 🧠 Core Logic Explanation

### 1. State Management

```id="q1md82"
const [message, setMessage] = useState('')
const [chats, setChats] = useState([])
const [isTyping, setTyping] = useState(false)
```

* `message` → user input
* `chats` → conversation history
* `isTyping` → AI response loading indicator

---

### 2. Sending Message

* Prevents empty input using `.trim()`
* Adds user message instantly to UI
* Clears input field
* Activates typing indicator

---

### 3. API Request (Gemini)

```id="l0a92k"
const payload = {
  contents: [{
    parts: [{ text: `Answer this in short - ${trimmed}` }],
    role: "user"
  }]
}
```

* Uses `axios.post()` to send request
* API endpoint:
  `gemini-2.0-flash:generateContent`

---

### 4. Handling Response

```id="c2l9sd"
const aiResult = data.candidates[0].content.parts[0].text
```

* Extracts AI-generated text
* Appends it to chat history

---

### 5. Error Handling

```id="a1kd82"
toast.error(err.message)
```

* Displays user-friendly error messages

---

### 6. UI Rendering

* Conditional rendering based on sender:

  * `"me"` → left-aligned (user)
  * `"ai"` → right-aligned (AI)
* Each message includes:

  * Text
  * Timestamp (formatted via Moment.js)

---

### 7. Typing Indicator

```id="p3d82k"
{isTyping && <small>Typing...</small>}
```

* Shown while waiting for API response

---

## 🎨 UI Highlights

* Chat bubbles with different colors
* Smooth fade-in animations
* Fixed input bar at bottom
* Clean centered layout
* Responsive design for mobile & desktop

---

## ⚠️ Known Issues / Improvements

* API key exposed in frontend (security risk ❌)
* No chat persistence (refresh clears messages)
* No streaming response (only full response)
* Large responses not optimized



