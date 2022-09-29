import React from "react";

import "../styles/Weather.css";

export default function Current({ weatherInfo }) {
  return (
    <div className="Weather">
      <div className="Weather__info">
        <img
          className="Weather__icon"
          src={
            "https://openweathermap.org/img/wn/" +
            weatherInfo.summary.picPath +
            ".png"
          }
          alt={weatherInfo.summary.picPath}
        />
        <ul className="Weather__list">
          <li className="list__temperature">
            {Math.round(weatherInfo.temperatureC)}
            <sup className="list__temperature-symbol">°C</sup>
          </li>
          <li> Humidity: {weatherInfo.humidity}% </li>
          <li>
            Wind: {Math.round(weatherInfo.wind)} km/h{" "}
          </li>
        </ul>
      </div>
      <div className="Weather__other-info">
        <h2 className="other-info__city">
          {weatherInfo.location}
        </h2>
        <h3 className="other-info__clouds">{weatherInfo.dayOfWeek}</h3>
        <h3 className="other-info__clouds">
          {weatherInfo.summary.title}
        </h3>
      </div>
    </div>
  );
}
