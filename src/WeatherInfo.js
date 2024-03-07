import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

// Recieving data from the Weather object

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
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
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="temperature-current">
              {Math.round(props.data.temperature)}
              <span className="temperature-unit">°C</span>
            </div>
          </div>
          <h1 className="city-name">
            {props.data.city}, {props.data.country}
          </h1>
          <div className="weather-info-wrapper mt-3">
            <div className="weather-info d-flex">
              <div className="me-3">
                <img
                  src="/assets/humidity-icon.svg"
                  alt="humidity-icon"
                  className="weather-info_icon"
                ></img>
                <span>{props.data.humidity}</span>%
              </div>
              <div>
                <img
                  src="/assets/ico-wind.svg"
                  alt="wind-icon"
                  className="weather-info_icon"
                ></img>
                <span>{props.data.wind}</span>km/h
              </div>
            </div>
            <div className="weather-description text-capitalize">
              {props.data.description}
            </div>
            <div className="date-wrapper">
              <FormattedDate date={props.data.date} />
              {/*Pass the date from an object to the component*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WeatherInfo;
