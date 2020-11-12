import React from "react";
import MultiSelect from "../components/multiSelect";

export default function ({ selectedItems, setSelectedItems }) {
  return (
    <MultiSelect
      selectedItems={selectedItems}
      setSelectedItems={setSelectedItems}
    />
  );
}
