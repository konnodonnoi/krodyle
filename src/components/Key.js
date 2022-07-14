import React, {useContext} from "react";
import {AppContext} from "../App";


const Key = ({ keyval, largeKey }) => {
  const {board, setBoard} = useContext(AppContext);

  const selectLetter = () => {
    const newBox = [...board]
    newBox[0][0] = keyval
    setBoard(newBox)
  }
  return (
    <div className="key" id={largeKey && "big"} onClick={selectLetter}>
      {keyval}
    </div>
  );
};

export default Key;
