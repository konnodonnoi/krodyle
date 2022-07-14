
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { createContext, useState } from "react";
import { boardDefault } from "./components/Words";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <nav>
        <img src="../images/raccoon1.png" alt="raccoon" className="logo" />
      </nav>
      <AppContext.Provider value={{ board, setBoard }}>
        <div className="game">
      <Board />
      <Keyboard />
      </div>
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
