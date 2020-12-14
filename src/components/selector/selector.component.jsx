import React from "react";

const Selector = ({ children, active, onClick }) => {
  return (
    <div className={`selector ${active ? "active" : "inactive"}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Selector;
