import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            <span>
              <i className="fas fa-quote-left"></i>{" "}
            </span>
            Dictionary
          </h1>
        </header>
        <main>
          <Dictionary defaultKeyword="lemon" />
        </main>
        <div className="App-footer">
          <small>
            <a
              href="https://github.com/judithrauland/react-dictionary"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            {""} by Judith Rauland. Photos provided by {""}
            <a href="https://www.pexels.com" target="_blank" rel="noreferrer">
              Pexels
            </a>
            .
          </small>
        </div>
      </div>
    </div>
  );
}
