import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="row py-4">
          <div className="col">
            <form className="search-form">
              <input
                type="search"
                placeholder="Type a city name..."
                className="search-input"
              />
              <input type="submit" value="Search" className="search-button" />
            </form>
          </div>
          <div className="col text-end">
            <img src={logo} alt="Synoptik Logo"></img>
          </div>
        </header>
        <section className="hero-section container p-0">
          <div className="hero_background-wrapper">
            <img
              src="assets\weather-app-bg.svg"
              alt="synoptik-background"
              className="hero_background-image"
            ></img>
          </div>
          <div className="hero-content">
            <div className="temperature-wrapper mb-1">
              <div className="weather-icon">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="icon-weather"
                ></img>
              </div>
              <div className="temperature-current">13°</div>
            </div>
            <h1 className="city-name">Regensburg</h1>
            <div className="weather-info-wrapper mt-3">
              <div className="weather-info d-flex">
                <div className="me-3">
                  <img
                    src="/assets/ico-umbrella.svg"
                    alt="wind-icon"
                    className="weather-info_icon"
                  ></img>
                  <span>86</span>%
                </div>
                <div>
                  <img
                    src="/assets/ico-wind.svg"
                    alt="wind-icon"
                    className="weather-info_icon"
                  ></img>
                  <span>2</span>km/h
                </div>
              </div>
              <div className="weather-description">Scattered Clouds</div>
              <div className="date-wrapper">Monday, 16:00</div>
            </div>
          </div>
        </section>
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
