import React from 'react';

function FormElement({ label, type, id, value, onChange, required,msg }) {
  return (
    <div className='form-element-container'>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={label}
      />
    </div>
  );
}

export default FormElement;
