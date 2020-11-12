import React from "react";

export default ({ icon, title, completed, active }) => {
  return (
    <div
      className={`element ${active && "active"} ${completed && "completed"}`}
    >
      <i className={`element__title ${icon}`}></i>
    </div>
  );
};
