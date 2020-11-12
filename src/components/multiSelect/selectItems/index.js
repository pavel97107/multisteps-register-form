import React from "react";
import SelectedItem from "./item";

export default function SelectedItems({
  removeSkillsItem,
  removeAllSkillsItems,
  setShowItemsList,
  selectedItems,
}) {
  function set(e) {
    if (e.target.closest(".rm")) return;
    setShowItemsList((prevState) => !prevState);
  }

  const itemList = selectedItems.map((item) => {
    function removeItem() {
      removeSkillsItem(item);
    }
    return (
      <SelectedItem key={item.id} title={item.title} removeItem={removeItem} />
    );
  });

  console.log("Render Selected Items");

  return (
    <div className="selected-items" onClick={set}>
      <div className="selected-items__body">
        {selectedItems && selectedItems.length !== 0 ? (
          itemList
        ) : (
          <span>Select Skills</span>
        )}
      </div>
      <div className="selected-items__dashboard">
        {selectedItems.length !== 0 && (
          <div
            onClick={removeAllSkillsItems}
            className="selected-items__reset dash-it rm"
          ></div>
        )}
        <div className="selected-items__open dash-it op"></div>
      </div>
    </div>
  );
}
