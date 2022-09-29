import React from "react";
//import Refresh_icon from "../img/Refresh_icon.svg.png";
import Weather from "./Weather";
import Forecast from "./Forecast";

import "../styles/WeatherAndForecast.css";

function WeatherAndForecast({ weatherInfo }) {

  const list = weatherInfo.weatherDailies.map((x, i) => {
    return (<Forecast weatherInfo={x} key={i} />)
  });
  return (
    <div className="WeatherAndForecast">
      <Weather weatherInfo={weatherInfo.weatherForecast} />
      <div className="WeatherAndForecast__container">
        {list}
      </div>
    </div>
  );
}

export default WeatherAndForecast;
