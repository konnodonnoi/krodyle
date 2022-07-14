import React, { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ keyval, largeKey }) => {
  const { board, setBoard, currAttempt, setCurrAttempt } =
    useContext(AppContext);

  const selectLetter = () => {
    if (keyval === "ENTER") {
      if (currAttempt.letterPos !== 5) return;
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      if (currAttempt.letterPos > 4) return;
      const newBox = [...board];
      newBox[currAttempt.attempt][currAttempt.letterPos] = keyval;
      setBoard(newBox);
      setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
    }
  };
  return (
    <div className="key" id={largeKey && "big"} onClick={selectLetter}>
      {keyval}
    </div>
  );
};

export default Key;
