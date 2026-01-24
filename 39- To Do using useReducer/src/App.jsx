import { useReducer, useState } from "react";

let nextId = 1;

// Reducer
function tasksReducer(state, action) {
  switch (action.type) {
    case "added":
      return [
        ...state,
        {
          id: action.id,
          question: action.text,
        },
      ];

    case "updated":
      return state.map(task =>
        task.id === action.id
          ? { ...task, question: action.text }
          : task
      );

    case "deleted":
      return state.filter(task => task.id !== action.id);

    default:
      return state;
  }
}

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch({
      type: "added",
      id: nextId++,
      text,
    });

    setText("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-700 to-purple-800 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
           Reducer Tasks Manager
        </h1>

        {/* ADD TASK */}
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter task..."
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            Add
          </button>
        </form>

        {/* TASK LIST */}
        <div className="space-y-3">
          {tasks.map(task => (
            <div
              key={task.id}
              className="flex items-center justify-between bg-gray-100 p-3 rounded"
            >
              {editId === task.id ? (
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 mr-2 border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span className="flex-1 text-gray-800">
                  {task.question}
                </span>
              )}

              <div className="flex gap-2">
                {editId === task.id ? (
                  <button
                    onClick={() => {
                      dispatch({
                        type: "updated",
                        id: task.id,
                        text: editText,
                      });
                      setEditId(null);
                      setEditText("");
                    }}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditId(task.id);
                      setEditText(task.question);
                    }}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() =>
                    dispatch({ type: "deleted", id: task.id })
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {tasks.length === 0 && (
            <p className="text-center text-gray-500">
              No tasks added yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
}






// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     case 'RESET':
//       return { count: 0 };
//     default:
//       return state;
//   };

//   // // Then dispatch like: dispatch({ type: 'INCREMENT' });
//   // return { count: state.count + 1 }

// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, { count: 1 })

//   const increamnet = () => {
//     dispatch({ type: 'INCREMENT' })
//   }

//   const decreamnet = () => {
//     dispatch({ type: 'DECREMENT' })
//     console.log ("'DECREMENTT'")
//   }

//    const reset = () => {
//     dispatch({ type: 'RESET' })
//   }


//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-r from-zinc-400 to-purple-800 text-white flex flex-col">

//         <div className="w-9/12 bg-purple-300 py-10 mx-auto rounded ">
//           <h2 className="text-center font-semibold text-slate-700">
//             Count : {state.count}
//           </h2>

//           <button onClick={increamnet} className="w-34 flex mt-4 mx-auto text-center font-bold px-3 bg-zinc-500 py-2 rounded hover:scale-110 duration-400 text-center items-center gap-2">
//             <i className="ri-add-circle-fill ri-add-circle-line text-3xl text-red-700"></i>
//              Task +
//           </button>

//           <button onClick={decreamnet} className="w-34 flex mt-4 mx-auto text-center font-bold px-3 bg-zinc-500 py-2 rounded hover:scale-110 duration-400 text-center items-center gap-2">
//             <i className="ri-add-circle-fill ri-add-circle-line text-3xl text-red-700"></i>
//              Task - 
//           </button>

//            <button onClick={reset} className="w-34 flex mt-4 mx-auto text-center font-bold px-3 bg-zinc-500 py-2 rounded hover:scale-110 duration-400 text-center items-center gap-2">
//             <i className="ri-add-circle-fill ri-add-circle-line text-3xl text-red-700"></i>
//              reset
//           </button>

//         </div>

//       </div>

//     </>
//   )
// }

// export default App