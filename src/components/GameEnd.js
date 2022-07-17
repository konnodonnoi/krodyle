import React, { useContext } from "react";
import { AppContext } from "../App";

const GameEnd = () => {
  const { gameEnd, currAttempt, correctWord  } = useContext(AppContext);
  return (
    <div className="nav">
      <h3 className="gameEnd">{gameEnd.guessedWord ? "congratulations... you guessed correctly!" : "oof...you failed"}</h3>
      <h1 className="gameEnd">correct: {correctWord}</h1>
      {gameEnd.guessedWord && (<h3> you guessed in {currAttempt.attempt} attempt(s)</h3>)}
      
    </div>
  );
};

export default GameEnd;
