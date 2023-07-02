export type WeatherDataProps = {
  temperature: number;
  weatherCondition: string;
  humidity: number;
};

export const WeatherData = ({
  temperature,
  weatherCondition,
  humidity,
}: WeatherDataProps) => {
  return (
    <div>
      <p>Temperature: {temperature}°C</p>
      <p>Weather Condition: {weatherCondition}</p>
      <p>Humidity: {humidity}%</p>
    </div>
  );
};
