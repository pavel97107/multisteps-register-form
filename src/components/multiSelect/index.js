import React from "react";
import ItemsList from "./itemsList";
import SelectedItems from "./selectItems";
import "./styles.css";

export default function MultiSelect({ selectedItems, setSelectedItems }) {
  const [showItemsList, setShowItemsList] = React.useState(false);
  const [ItemsListData, setItemListData] = React.useState([
    { title: "Box", id: 1 },
    { title: "Design", id: 2 },
    { title: "Code", id: 3 },
  ]);

  function addSkillsItem(item) {
    const newItemsListData = ItemsListData.filter(
      (elem) => elem.id !== item.id
    );
    setSelectedItems(item);
    setItemListData(newItemsListData);
  }

  function removeSkillsItem(item) {
    const copyState = selectedItems.filter((el) => el.id !== item.id);
    setSelectedItems(copyState);
    setItemListData([...ItemsListData, item]);
  }

  function removeAllSkillsItems() {
    setSelectedItems([]);
    setItemListData([...ItemsListData, ...selectedItems]);
  }

  return (
    <div className="select-form">
      <SelectedItems
        removeAllSkillsItems={removeAllSkillsItems}
        selectedItems={selectedItems}
        removeSkillsItem={removeSkillsItem}
        setShowItemsList={setShowItemsList}
      />
      {showItemsList && ItemsListData.length !== 0 && (
        <ItemsList
          ItemsListData={ItemsListData}
          setShowItemsList={setShowItemsList}
          addSkillsItem={addSkillsItem}
        />
      )}
    </div>
  );
}
