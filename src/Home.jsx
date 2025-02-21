import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <h1>Projects</h1>
      <Link to="/color-picker">
        <button>Color Picker</button>
      </Link>
      <Link to="/country">
        <button>Country</button>
      </Link>
      <Link to="/todo">
        <button>Todo List</button>
      </Link>
    </div>
  );
}

export default Home;
