import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { createContext, useEffect, useState } from "react";
import { boardDefault, generateWordSet } from "./components/Words";
import GameEnd from "./components/GameEnd";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctWord, setCorrectWord] = useState("")
  const [gameEnd, setGameEnd] = useState({
    gameEnd: false,
    guessedWord: false,
  });


  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.dailyWord.toUpperCase());
    });
  }, []);

  const onSelectLetter = (keyval) => {
    if (currAttempt.letterPos > 4) return;
    const newBox = [...board];
    newBox[currAttempt.attempt][currAttempt.letterPos] = keyval;
    setBoard(newBox);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBox = [...board];
    newBox[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBox);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("word not found");
    }

    if (currWord === correctWord) {
      setGameEnd({gameEnd : true, guessedWord : true})
      return;
    }

    if (currAttempt.attempt === 5)
    setGameEnd({gameEnd : true, guessedWord : false})
  };
  return (
    <div className="App">
      <nav>
        <img src="../images/raccoon1.png" alt="raccoon" className="logo" />
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
          onDelete,
          onEnter,
          correctWord,
          disabledLetters,
          setDisabledLetters,
          gameEnd,
          setGameEnd,
        }}
      >
        <div className="game">
          <Board />
          {gameEnd.gameEnd ? <GameEnd /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
