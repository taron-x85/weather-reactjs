import React from "react";

import "../styles/Forecast.css";

export default function Forecast({ weatherInfo }) {

  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return (
    <div>
      <h1 className="Forecast__title">{days[new Date(weatherInfo.date).getDay()]}</h1>
      <img
        className="Forecast__weather-icon"
        src={
          "https://openweathermap.org/img/wn/" +
          weatherInfo.summary.picPath +
          ".png"
        }
        alt={weatherInfo.summary.picPath}
      />
      <div className="Forecast__temperature">
        <span className="temperature__max">
          {Math.round(weatherInfo.temperatureMaxC)}
          <sup className="temperature__symbol">°</sup>
        </span>
        <span className="temperature__min">
          {Math.round(weatherInfo.temperatureMinC)}
          <sup className="temperature__symbol">°</sup>
        </span>
      </div>
    </div>
  );
}
