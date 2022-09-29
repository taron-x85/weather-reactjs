import axios from "axios";

async function getWeatherAndForecast() {
  const response = await axios.get(
    "https://localhost:7098/api/WeatherForecast/CurrentForecast",
    {
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  );
  return response;
}

export default getWeatherAndForecast;
