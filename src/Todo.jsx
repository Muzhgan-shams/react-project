import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a task..."
      />
      <button onClick={addTask}>Add Task</button>
      <ol className="list">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
      <div>
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
}

export default Todo;
