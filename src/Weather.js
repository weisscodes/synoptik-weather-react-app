import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import logo from "./logo.svg";

function Weather(props) {
  const [city, setCity] = useState(props.defaultCity); // sent from the App component
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
      icon: response.data.weather[0].icon,
      date: new Date((response.data.dt + response.data.timezone) * 1000),
      timezone: response.data.timezone,
    });
  }

  function search() {
    const apiKey = "667d9f573c8af4c33457be5d561a9148";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather container">
        <header className="d-flex align-items-center flex-column-reverse flex-sm-row align-items-sm-center py-4">
          <div className="col-12 col-sm-6 col-md-5">
            <form className="search-form" onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Type a city name..."
                className="search-input"
                onChange={handleCityChange}
              />
              <input type="submit" value="Search" className="search-button" />
            </form>
          </div>
          <div className="col text-sm-end mb-3 mb-sm-0">
            <img src={logo} alt="Synoptik Logo" className="img-fluid"></img>
          </div>
        </header>
        <WeatherInfo data={weatherData} />
        {/*Sending data from the Object to the component*/}
      </div>
    );
  } else {
    search();
    return "Loading"; // change to Loader Spinner
  }
}

export default Weather;
