import React from "react";

const InputElement = (props) => {
  const {name,type,placeholder,className, changeHandle } = props;
  return (
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(event) => {
          changeHandle(event,name);
        }}
        className={className}
      />
  );
};

export default InputElement;

     
    