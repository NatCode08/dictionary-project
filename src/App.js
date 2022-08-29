import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div classname="dictionaryContainer">
        <Dictionary />
      </div>
      <footer>
        {" "}
        Coded by{" "}
        <a href="https://github.com/NatCode08" target="_blank" rel="noreferrer">
          Natalia Ortiz{" "}
        </a>{" "}
      </footer>
    </div>
  );
}

export default App;
