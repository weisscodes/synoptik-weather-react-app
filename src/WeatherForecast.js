import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "667d9f573c8af4c33457be5d561a9148";
  const latitude = props.coordinates.lat;
  const longitude = props.coordinates.lon;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-card d-flex flex-column align-items-center">
            <div className="forecast-date">Mo, May 22</div>
            <div className="forecast-icon">
              <WeatherIcon code="02d" />
            </div>
            <div className="forecast-description">Sunny</div>
            <div className="forecast-temperature">
              <span className="forecast-temperature_max">+13°</span>
              <span className="forecast-temperature_min">+8°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
