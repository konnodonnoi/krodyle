import React, { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ keyval, largeKey }) => {
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);

  const selectLetter = () => {
    if (keyval === "ENTER") {
      onEnter();
    } else if (keyval === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyval);
    }
  };
  return (
    <div className="key" id={largeKey && "big"} onClick={selectLetter}>
      {keyval}
    </div>
  );
};

export default Key;
