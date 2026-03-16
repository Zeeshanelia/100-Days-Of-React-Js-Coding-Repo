import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],   // state is an empty array

  reducers: {
    // Add a new todo
    addTodo: (state, action) => {
      state.push({
        id:        Date.now(),
        text:      action.payload,
        completed: false,
      });
    },

    // Toggle done / not done
    toggleTodo: (state, action) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },

    // Remove one todo
    deleteTodo: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    },

    // Remove all completed todos
    clearCompleted: (state) => {
      return state.filter(t => !t.completed);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, clearCompleted,} = todosSlice.actions;



// Selectors
export const selectTodos   = (state) => state.todos;

export const selectActiveTodos = (state) => state.todos.filter(t => !t.completed);

export const selectDoneTodos  = (state) =>  state.todos.filter(t => t.completed);

export default todosSlice.reducer;