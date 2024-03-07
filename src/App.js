import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />
      <div className="container">
        <footer className="mt-3 text-center">
          This project was coded by Margo Wise and{" "}
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
