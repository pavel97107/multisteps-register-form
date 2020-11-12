import React, { useState, useEffect, useCallback } from "react";
import DropMenu from "./dropmenu";
export const Select = React.memo(
  ({ data, cityValue, defaultValue, onClick }) => {
    const [defaultTitle, setDefaultTitle] = useState(defaultValue);
    const [showMenu, setShowMenu] = useState(false);

    function setValue(e) {
      onClick(e.target.dataset.id);
      setDefaultTitle(e.target.textContent);
      setShowMenu(false);
    }

    function showDropMenu() {
      if (data.length < 1) {
        return setDefaultTitle("Select the country first");
      }
      setShowMenu((prevState) => !prevState);
    }

    useEffect(() => {
      if (typeof cityValue === "string" && cityValue === "") {
        setDefaultTitle(defaultValue);
      }
    }, [cityValue]);

    const handleClickDisplayOutSide = useCallback(
      (e) => {
        if (e.target.classList.contains("select__title")) return;
        if (e.target && !e.target.classList.contains("dropmenu__option")) {
          setShowMenu(false);
        }
      },
      [showMenu]
    );

    return (
      <div className="select">
        <div onClick={showDropMenu} className="select__title">
          {defaultTitle}
        </div>
        {showMenu && (
          <DropMenu
            setValue={setValue}
            data={data}
            handleClickDisplayOutSide={handleClickDisplayOutSide}
          />
        )}
      </div>
    );
  }
);
