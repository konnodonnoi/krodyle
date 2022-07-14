import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="App">
      <nav>
        <img src="../images/raccoon1.png" alt="raccoon" className="logo" />
      </nav>
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
