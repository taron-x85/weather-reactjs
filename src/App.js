import React, { useState, useEffect } from "react";
import WeatherAndForecast from "./components/WeatherAndForecast";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Warning from "./components/Warning";
import getWeatherAndForecast from "./api/weatherAndForecast";

import "./styles/App.css";

function App() {
  const [isNight, setIsNight] = useState(false);
  const [weatherAndForecastInfo, setWeatherAndForecastInfo] = useState({});
  const [contentState, setContentState] = useState("blank");

  let body = document.getElementsByTagName("body")[0];
  body.classList.add(isNight ? "day" : "night");

  function showWarning() {
    setContentState("warning");
    setTimeout(() => setContentState("blank"), 3000);
  }

  useEffect(() => {
    getWeatherAndForecast()
      .then((res) => {
        setIsNight(res.data.weatherForecast.summary.isNight);
        setWeatherAndForecastInfo(res.data);
        setContentState("weatherAndForecast");
      })
      .catch((error) => showWarning());
  }, []);

  const Main = {
    blank: () => null,
    loading: () => <Loader />,
    warning: () => <Warning />,
    weatherAndForecast: () => (
      <WeatherAndForecast
        weatherInfo={weatherAndForecastInfo}
      />
    ),
  };

  return (
    <div className="App">
      <div className="App__container">
        <>
          {Main[contentState]()}
        </>
        <Footer />
      </div>
    </div>
  );
}

export default App;
