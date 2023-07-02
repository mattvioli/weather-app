import React, { useState } from "react";
import { WeatherForm } from "./components/WeatherForm";
import { WeatherData } from "./components/WeatherData";
import { Header } from "./components/Header";
import { useFetchWeather } from "./hooks/useFetchWeather";
import { Card } from "./components/Card";
import { Main } from "./components/Main";

const App: React.FC = () => {
  const [location, setLocation] = useState("");

  const { data: weatherData, error, refetch } = useFetchWeather({ location });
  const handleGetWeather = () => {
    refetch();
  };

  return (
    <Main>
      <Card>
        <Header>Weather App</Header>
        <WeatherForm {...{ location, setLocation, handleGetWeather }} />
        {error && <p>{error.message}</p>}
        {weatherData && <WeatherData {...weatherData} />}
      </Card>
    </Main>
  );
};

export default App;
