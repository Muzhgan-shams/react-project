import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import Color from './Color.jsx';
import Country from './Country.jsx';
import Todo from './Todo.jsx';
import './App.css';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/color-picker" element={<Color />}></Route>
        <Route path="/country" element={<Country />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
    </>
  );
}

export default App;
