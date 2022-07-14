import React from "react";
import Key from "./Key";

const Keyboard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key) => {
          return <Key keyval={key} />;
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return <Key keyval={key} />;
        })}
      </div>
      <div className="line3">
      <Key keyval={"ENTER"} />

        {keys3.map((key) => {
          return <Key keyval={key} largeKey />;
        })}
        <Key keyval={"DELETE"} largeKey/>
      </div>
    </div>
  );
};

export default Keyboard;
