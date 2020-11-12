import React, { useEffect } from "react";

export default React.memo(function ({
  data,
  setValue,
  handleClickDisplayOutSide,
}) {
  useEffect(() => {
    document.addEventListener("mousedown", handleClickDisplayOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickDisplayOutSide);
    };
  }, []);

  return (
    <div className="dropmenu">
      {data.map((option) => (
        <div
          className="dropmenu__option"
          key={option.id}
          onClick={setValue}
          data-id={option.id}
        >
          {option.title}
        </div>
      ))}
    </div>
  );
});
