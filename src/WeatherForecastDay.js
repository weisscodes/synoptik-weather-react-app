import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  const date = new Date(props.data.dt * 1000);

  function day() {
    const day = date.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function month() {
    const month = date.getMonth();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[month];
  }

  function currentDate() {
    let currentDate = date.getDate();
    if (currentDate < 10) {
      currentDate = `0${currentDate}`;
    }
    return currentDate;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-card d-flex flex-column align-items-center">
        <div className="forecast-date">
          {day()}, {month()} {currentDate()}
        </div>
        <div className="forecast-icon">
          <WeatherIcon code={props.data.weather[0].icon} />
        </div>
        <div className="forecast-description">Sunny</div>
        <div className="forecast-temperature">
          <span className="forecast-temperature_max">{maxTemperature()}°</span>
          <span className="forecast-temperature_min">{minTemperature()}°</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecastDay;
