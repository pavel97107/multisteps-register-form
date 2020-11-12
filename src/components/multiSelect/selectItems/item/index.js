import React from "react";

export default function SelectedItem({ title, removeItem }) {
  return (
    <div className="selected-item">
      <div className="selected-item__body">
        <span className="selected-item__title">{title}</span>
        <span
          className="selected-item__btn-remove rm"
          onClick={removeItem}
        ></span>
      </div>
    </div>
  );
}
