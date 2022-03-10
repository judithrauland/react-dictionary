import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary App</header>
        <Dictionary />
        <div className="App-footer">
          <small>
            <a
              href="https://github.com/judithrauland/react-dictionary"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            {""} by Judith Rauland
          </small>
        </div>
      </div>
    </div>
  );
}
