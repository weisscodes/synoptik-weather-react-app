import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";
import logo from "./logo.svg";

// 667d9f573c8af4c33457be5d561a9148

function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false }); // Instead of using a separate state
  function handleResponse(response) {
    setWeatherData({
      ready: true, // instead of calling setReady(true)
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather container">
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
        <section className="hero-section p-0">
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
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                ></img>
              </div>
              <div className="temperature-current">
                {Math.round(weatherData.temperature)}{" "}
                <span className="temperature-unit">°C</span>
              </div>
            </div>
            <h1 className="city-name">
              {weatherData.city}, {weatherData.country}
            </h1>
            <div className="weather-info-wrapper mt-3">
              <div className="weather-info d-flex">
                <div className="me-3">
                  <img
                    src="/assets/humidity-icon.svg"
                    alt="humidity-icon"
                    className="weather-info_icon"
                  ></img>
                  <span>{weatherData.humidity}</span>%
                </div>
                <div>
                  <img
                    src="/assets/ico-wind.svg"
                    alt="wind-icon"
                    className="weather-info_icon"
                  ></img>
                  <span>{weatherData.wind}</span>km/h
                </div>
              </div>
              <div className="weather-description text-capitalize">
                {weatherData.description}
              </div>
              <div className="date-wrapper">
                <FormattedDate date={weatherData.date} />
                {/*Pass the date from an object to the component*/}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    const apiKey = "667d9f573c8af4c33457be5d561a9148";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric
`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading"; // change to Loader Spinner
  }
}

export default Weather;
