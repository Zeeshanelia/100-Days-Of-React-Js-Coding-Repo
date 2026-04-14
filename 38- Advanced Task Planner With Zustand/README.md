# 📋 Task Planner App (React + Ant Design)

A clean and interactive **Task Management (Planner) App** built with **React**, **Ant Design (Antd)**, and modern UI styling. This application allows users to create, manage, and track tasks based on priority levels.

---

## 🚀 Features

* ✅ Create new tasks with title, description, and priority
* 📊 Organize tasks into 3 priority levels:

  * 🔴 Highest
  * 🟡 Medium
  * 🟢 Lowest
* 🔄 Update task status:

  * Pending
  * In Progress
  * Completed
* ❌ Delete tasks instantly
* ⏱️ Live clock display in navbar
* 📈 Total task counter in footer
* 🎨 Smooth UI with gradients and animations (Animate.css + Remix Icons)

---

## 🧠 Tech Stack

* **React.js** (Hooks: `useState`, `useEffect`)
* **Ant Design (antd)** – UI components
* **Animate.css** – Animations
* **Remix Icons** – Icons
* **Tailwind CSS** (utility classes for styling)

---

## 📂 Project Structure (Simplified)

```
src/
│
├── App.jsx        # Main application logic
├── index.js       # Entry point
├── styles/        # Optional styling files
```


## 🧩 Core Concepts Explained

### 1. State Management

The app uses React local state:

```js
const [tasks, setTasks] = useState({
  highest: [],
  medium: [],
  lowest: []
});
```

👉 Tasks are grouped by **priority**, not a flat list.

---

### 2. Task Creation

* Uses Ant Design `Form`
* On submit → `createTask()` is triggered
* Task is added dynamically based on selected priority

```js
[values.periorty]: [...prevTasks[values.periorty], newTask]
```

---

### 3. Status Handling

Each task has a `status` field:

```js
pending | inProgress | completed
```

Updated using dropdown (`Select` component).

---

### 4. Dynamic Rendering

Reusable function:

```js
renderTaskCard(task, priority)
```

👉 Keeps UI clean and avoids repetition.

---

### 5. Live Timer

```js
setInterval(() => {
  setTimer(new Date().toLocaleTimeString());
}, 1000);
```

👉 Updates every second.

---

## 🎯 UI Layout

* **Navbar (Top)** → App name + Live Time
* **Main Section** → 3 Columns (Priority-based tasks)
* **Footer (Bottom)** → Total tasks count
* **Modal** → Create new task

---

## ⚠️ Important Notes / Improvements

* ❗ Typo in variable names:

  * `periorty` → should be `priority`
  * `discription` → should be `description`

* 💡 Possible Enhancements:

  * Add drag-and-drop (like Trello)
  * Persist data using LocalStorage / Backend
  * Add authentication
  * Add due dates & reminders
  * Dark mode toggle

---

## 📸 Preview Idea

This app behaves similar to:

* Trello board (basic version)
* Kanban-style task manager



* **screenshots section**

