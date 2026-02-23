
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleTaskSubmit = () => {
    if (task.trim() === "") return; // Prevent adding empty tasks

    if (editIndex !== null) {
      const updatedTasks = taskArray.map((item, index) =>
        index === editIndex ? task : item
      );
      setTaskArray(updatedTasks);
      setEditIndex(null); // Reset edit index
    } else {
      setTaskArray([...taskArray, task]);
    }
    
    setTask(""); // Clear the input field
  };

  const handleTaskRemove = (index) => {
    const filteredTasks = taskArray.filter((_, i) => i !== index);
    setTaskArray(filteredTasks);
  };

  const handleTaskEdit = (index) => {
    setTask(taskArray[index]); // Set the current task to the value at the specified index
    setEditIndex(index); // Set the edit index to the specified index
  };

  return (
    <div className='mainDiv'>
      <h2>{editIndex !== null ? "Editing Task" : "Add New Task"}</h2>
      <input
        value={task}
        placeholder='Enter your task here'
        onChange={handleInputChange}
      />
      <button onClick={handleTaskSubmit}>Submit Task</button>
      <div>
        {taskArray.map((e, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
            <h3>{e}</h3>
            <button onClick={() => handleTaskEdit(i)}>Edit</button>
            <button onClick={() => handleTaskRemove(i)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
























