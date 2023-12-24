import React, { useState } from 'react';

const Toggle = ({ isChecked: initialChecked = false ,className}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={`switch ${className ? className : ''}`}>
      <input type="checkbox" value={isChecked} onChange={handleChange} />
      <div className="slider"></div>
    </label>
  );
};

export default Toggle;
