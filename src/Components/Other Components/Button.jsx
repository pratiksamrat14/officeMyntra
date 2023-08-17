import React from "react";

const Button = (props) => {
  const { type, label, className,handle } = props;
  return (
    <>
      <button type={type} className={className} onClick={handle}>
        {label}
      </button>
    </>
  );
};

export default Button ;