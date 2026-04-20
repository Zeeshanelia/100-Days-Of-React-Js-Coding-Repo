## Advanced Task Planner App (React + Zustand + Ant Design)

A powerful and elegant task management application built with React, Zustand, and Ant Design. This planner helps you organize tasks by priority, track their status, and manage them efficiently with a clean and responsive interface.

🚀 Features
📝 Create tasks with title, description, and priority
📊 Categorize tasks into:
🔴 Highest Priority
🔵 Medium Priority
🟡 Lowest Priority


🔄 Update task status:
Pending
In Progress
Completed
🗑️ Delete individual tasks
❌ Delete all tasks with confirmation
⏱️ Live clock in navbar
📅 Built-in date picker
📌 Task creation timestamp
📭 Empty state UI for no tasks
🎨 Smooth UI with gradients and animations


🛠️ Tech Stack
React (Hooks)
Zustand (State Management)
Ant Design (UI Components)
Animate.css
Lucide Icons
Moment.js



📂 Project Structure

src/
 ├── App.jsx
 ├── store/
 │    └── usePlanner.js
 ├── index.js
 └── styles (optional)



All tasks are managed globally using a custom hook:

const { tasks, addTask, deleteTask, updateStatus, deleteAllTask } = usePlanner();
📌 Task Creation
Click "Add Task"
Fill out:
Title
Description
Priority
Submit to add task with:
Auto-generated ID
Default status: pending
Timestamp
const createTask = (value) => {
  value.status = "pending";
  value.id = Date.now();
  value.createdAt = new Date();
  addTask(value);
};

📌 Task Filtering

Tasks are grouped dynamically:

const highestTasks = tasks.filter(t => t.priority === "highest");
const mediumTasks = tasks.filter(t => t.priority === "medium");
const lowestTasks = tasks.filter(t => t.priority === "lowest");

📌 Status Updates
updateStatus(taskId, status);

📌 Delete Tasks
Delete single task via confirmation
Delete all tasks using top action button

🎨 UI Highlights
Responsive 3-column layout
Beautiful gradient headers
Ant Design Cards & Badges
Empty states with call-to-action
Smooth hover and transition effects

⚙️ Configuration
Modal Form Defaults
initialValues={{ description: desc }}
Date Formatting
moment(item.createdAt).format('DD MMM YYYY hh:mm A')