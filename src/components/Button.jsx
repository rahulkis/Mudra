import React from "react";

export const Button = (props) => {
  const { buttonText, type, className, handleClick } = props;
  return (
    <>
      <button type={type} className={className} onClick={handleClick}>
        {buttonText}
      </button>
    </>
  );
};
