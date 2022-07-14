import React from "react";

const Key = ({ keyval, largeKey }) => {
  return (
    <div className="key" id={largeKey && "big"}>
      {keyval}
    </div>
  );
};

export default Key;
