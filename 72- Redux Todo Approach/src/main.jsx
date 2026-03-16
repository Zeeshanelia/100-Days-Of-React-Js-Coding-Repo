import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from "./features/store.js";
import TodoApp from "./features/todos/TodoApp.jsx";

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <TodoApp />
    </Provider>
  </StrictMode>
)