type WeatherFormProps = {
  location: string;
  setLocation: (arg: string) => void;
  handleGetWeather: () => void;
};

export const WeatherForm = ({
  location,
  setLocation,
  handleGetWeather,
}: WeatherFormProps) => {
  return (
    <div>
      <input
        className="border border-blue-500 font-semibold"
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 m-1 rounded-full"
        onClick={() => handleGetWeather()}
      >
        Get Weather
      </button>
    </div>
  );
};
