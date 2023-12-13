import React, { useState } from 'react';
import logo from './logo.svg'; // Assuming you have this image.
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  
  const addTask = () => {
    if(newTask !== "") { // Prevent empty tasks from being added.
      setTodoList([...todoList, newTask]);
      setNewTask(""); // Clear the input after adding a task.
    }
  };
  
  const deleteTask = taskToDelete => {
    setTodoList(todoList.filter(task => task !== taskToDelete));
  };
  
  return (
    <div className="App">
      <div>
        <input value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
        <div>
          {todoList.map((task, index) => (
            <div key={index}> {/* Added key for list efficiency and to avoid warnings */ }
              <h1>{task}</h1>
              <button onClick={() => deleteTask(task)}>x</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
