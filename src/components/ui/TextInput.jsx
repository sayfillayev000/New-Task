import React from "react";

const TextInput = ({diabled = '', onChange, type = 'text',id, name = '', placeholder = '', className = '',defaultValue = ''}) => {
  return (
    <input
      className={`text-input ${className}`}
      type={type}
      name={name}
      id={id}
      onChange={e =>  onChange?.(e.target.value)}
      placeholder={placeholder}
      defaultValue={defaultValue}
      disabled={diabled}
    />
  );
};

export default TextInput;
