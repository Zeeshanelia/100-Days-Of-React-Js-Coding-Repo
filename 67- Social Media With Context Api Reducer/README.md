# 🚀 React Post Management App (Context API + useReducer)

A clean and scalable **React CRUD-style Post Management Application** built using **Context API + useReducer**. This project demonstrates **state management, API integration, component architecture, and form handling** — ideal for learning core React concepts.

---

# 📌 Features Overview

## 🧠 State Management (Context API + useReducer)

* Centralized global state using **Context API**
* Complex state logic handled with **useReducer**
* Clean separation of logic and UI

---

## ✍️ Create Post

* Add new posts dynamically

* Form includes:

  * User ID
  * Title
  * Content
  * Reactions
  * Tags (hashtags)

* Uses `useRef` for form handling

* Auto-clears form after submission

---

## 🗑️ Delete Post

* Remove posts instantly
* Triggered via delete icon
* Updates UI in real-time

---

## 📥 Fetch Initial Posts (API Integration)

* Fetch posts from:

  ```
  https://dummyjson.com/posts
  ```
* Adds posts to existing state
* Uses:

  * `useEffect`
  * `AbortController` (for cleanup)

---

## ⏳ Loading & Empty States

* Loading spinner while fetching data
* Welcome message when no posts available

---

## 🏷️ Tags System

* Add multiple tags (space-separated)
* Rendered as badges
* Improves UI readability

---

## ❤️ Reactions System

* Displays number of reactions
* Handles both:

  * API format (`reactions.likes`)
  * Custom format (`Reaction`)

---

## 🧭 Tab-Based Navigation

* Sidebar controls app view:

  * Home → Post List
  * Create Post → Form view

---

# 🧠 Core Logic

## 📦 Reducer Logic

```js id="f9r7px"
const PostListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;

  if (action.type === "dlt_Post") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "Add_Post") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "Add_Initial_Posts") {
    newPostList = [...action.payload.posts, ...currentPostList];
  }

  return newPostList;
};
```

---

## ➕ Add Post

```js id="9l1m2r"
const addPost = (userId, postTitle, postBody, Reaction, tags) => {
  dispatchPostList({
    type: "Add_Post",
    payload: {
      id: Date.now(),
      title: postTitle,
      body: postBody,
      userId,
      Reaction,
      tags,
    },
  });
};
```

---

## 🗑️ Delete Post

```js id="7u8rpa"
const deletePost = (postId) => {
  dispatchPostList({
    type: "dlt_Post",
    payload: { postId },
  });
};
```

---

## 📥 Add Initial Posts

```js id="z5a2dj"
const addIntialPosts = (posts) => {
  dispatchPostList({
    type: "Add_Initial_Posts",
    payload: { posts },
  });
};
```

---

# 🧩 Components Breakdown

## 🏠 App Component

* Wraps app with `PostListProvider`
* Controls tab switching (Home / Create Post)
* Layout:

  * Sidebar
  * Header
  * Main Content
  * Footer

---

## ✍️ CreatePost Component

* Form-based post creation
* Uses `useRef` for inputs
* Handles submit logic
* Clears inputs after submission

---

## 📄 PostList Component

* Fetches posts from API
* Displays:

  * Loading spinner
  * Empty state
  * List of posts

---

## 🧾 Post Component

* Displays:

  * Title
  * Body
  * Tags
  * Reactions
* Delete button included

---

## 🧭 Sidebar

* Controls navigation between:

  * Home
  * Create Post

---

## 🔝 Header & Footer

* Basic layout components
* Improve UI structure



---

# 🧱 Tech Stack

* **React.js**
* **Context API**
* **useReducer**
* **Bootstrap (UI Styling)**
* **React Icons**

---


