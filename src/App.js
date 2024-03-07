import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Regensburg" />
      <div className="container">
        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/margarita-wise/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Margo Wise
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/weisscodes/synoptik-weather-react-app"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
