import React from "react";
const btnStyle = {
  fontSize: "2rem",
  margin: "10px",
  boxShadow: "5px 5px 3px lightblue",
};
const Button = ({ event, children }) => {
  return (
    <button
      className="bg-green-300 text-white font-mono "
      onClick={event}
      style={btnStyle}
    >
      {children}
    </button>
  );
};

export default Button;
