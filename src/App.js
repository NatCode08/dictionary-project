import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="dictionaryContainer">
        <Dictionary defaultKeyword="sunrise" />

        <footer>
          {" "}
          Coded by{" "}
          <a
            className="developer"
            href="https://github.com/NatCode08"
            target="_blank"
            rel="noreferrer"
          >
            Natalia Ortiz{" "}
          </a>{" "}
          and is hosted in{" "}
          <a
            href="https://app.netlify.com/sites/astounding-bunny-ce24d6/overview"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
