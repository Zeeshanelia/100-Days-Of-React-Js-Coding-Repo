import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo, toggleTodo, deleteTodo, clearCompleted,
  selectTodos, selectActiveTodos, selectDoneTodos,
} from "../todos/todoSlice";

function TodoApp() {
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();

  const allTodos    = useSelector(selectTodos);
  const activeTodos = useSelector(selectActiveTodos);
  const doneTodos   = useSelector(selectDoneTodos);

  const todos =
    filter === "active"    ? activeTodos :
    filter === "completed" ? doneTodos   : allTodos;

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch(addTodo(text.trim()));
    setText("");
  };

  const filters = ["all", "active", "completed"];

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center pt-20 px-4">
      <div className="w-full max-w-md">

        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 tracking-tight">
          My Todos
        </h1>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Input row */}
          <div className="flex gap-2 p-4 border-b border-gray-100">
            <input
              value={text}
              onChange={e => setText(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleAdd()}
              placeholder="What needs to be done?"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition" />

            <button onClick={handleAdd} disabled={!text.trim()}
              className="px-4 py-2 bg-violet-500 hover:bg-violet-600 disabled:bg-gray-200 disabled:text-gray-400 text-white text-sm font-medium rounded-lg transition">
              Add
            </button>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-1 px-4 py-2 border-b border-gray-100">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded-full text-xs font-medium capitalize transition ${
                  filter === f
                    ? "bg-violet-100 text-violet-700"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Todo list */}
          <ul className="divide-y divide-gray-50">
            {todos.length === 0 ? (
              <li className="text-center text-sm text-gray-400 py-10">
                {allTodos.length === 0 ? "No todos yet — add one!" : "Nothing here"}
              </li>
            ) : (
              todos.map(todo => (
                <li
                  key={todo.id}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 group transition"
                >
                  {/* Checkbox */}
                  <button
                    onClick={() => dispatch(toggleTodo(todo.id))}
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition ${
                      todo.completed
                        ? "bg-violet-500 border-violet-500"
                        : "border-gray-300 hover:border-violet-400"
                    }`}
                  >
                    {todo.completed && (
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8">
                        <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.8"
                          strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>

                  {/* Text */}
                  <span className={`flex-1 text-sm transition ${
                    todo.completed ? "line-through text-gray-300" : "text-gray-700"
                  }`}>
                    {todo.text}
                  </span>

                  {/* Delete */}
                  <button
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    className="opacity-0 group-hover:opacity-100 w-6 h-6 flex items-center justify-center rounded text-gray-300 hover:text-red-400 hover:bg-red-50 transition text-lg leading-none"
                  >
                    ×
                  </button>
                </li>
              ))
            )}
          </ul>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
            <span className="text-xs text-gray-400">
              {activeTodos.length} item{activeTodos.length !== 1 ? "s" : ""} left
            </span>
            <button
              onClick={() => dispatch(clearCompleted())}
              className="text-xs text-gray-400 hover:text-red-400 transition">
              Clear completed
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TodoApp;