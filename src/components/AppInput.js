import React from 'react';

export const AppInput = ({label, type, title}) => (
  <div>
    <label>{label}</label>
    <input
      type={type}
      title={title}
      onChange={event => console.log (event.target.value)}
    />
  </div>
);
