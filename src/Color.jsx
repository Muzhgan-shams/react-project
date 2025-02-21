import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Color() {
  const [color, setColor] = useState('#000000');
  const handleColorPicker = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div>
        <b>Pick a Color</b>
      </div>
      <input
        className="input"
        type="color"
        value={color}
        onChange={handleColorPicker}
      />

      <br />
      <div className="wrapper">
        <div className="color-box" style={{ backgroundColor: color }}></div>
        <br />
        <div className="color-value">Color Value: {color}</div>
      </div>
      <br />
      <button>
        <Link to="/">Home</Link>
      </button>
    </>
  );
}

export default Color;
