import React from "react";
import { WeatherSvg } from "weather-icons-animated";

function WeatherIcon(props) {
  const codeMapping = {
    "01d": "sunny",
    "01n": "clear-night",
    "02d": "partlycloudy",
    "02n": "cloudy",
    "03d": "partlycloudy",
    "03n": "cloudy",
    "04d": "cloudy",
    "04n": "cloudy",
    "09d": "pouring",
    "09n": "pouring",
    "10d": "rainy",
    "10n": "rainy",
    "11d": "lightning-rainy",
    "11n": "lightning-rainy",
    "13d": "snowy",
    "13n": "snowy",
    "50d": "fog",
    "50n": "fog",
  };

  return <WeatherSvg state={codeMapping[props.code]} />; // array from the API icons
}

export default WeatherIcon;

// sunny;
// clear - night;
// partlycloudy;
// cloudy;
// fog;
// hail;
// rainy;
// snowy;
// snowy - rainy;
// pouring;
// lightning;
// lightning - rainy;
// windy;
// windy - variant;
