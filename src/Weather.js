import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import logo from "./logo.svg";

// 667d9f573c8af4c33457be5d561a9148

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
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
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
        <header className="row py-4">
          <div className="col">
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
          <div className="col text-end">
            <img src={logo} alt="Synoptik Logo"></img>
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
