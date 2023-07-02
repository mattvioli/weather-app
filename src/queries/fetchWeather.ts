import axios from "axios";

export const fetchWeather = async (location: string) =>
  await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}`
  );
