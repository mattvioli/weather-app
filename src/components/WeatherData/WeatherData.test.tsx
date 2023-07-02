import { render, screen } from "@testing-library/react";
import { WeatherData } from ".";

const mockProps = {
  temperature: 12,
  weatherCondition: "Snowing",
  humidity: 130,
};

describe("<WeatherData />", () => {
  it("renders", () => {
    render(<WeatherData {...mockProps} />);
    const temperature = screen.getByText(/Temperature: 12°C/i);
    const condition = screen.getByText(/Weather Condition: Snowing/i);
    const humidity = screen.getByText(/Humidity: 130%/i);

    expect(temperature).toBeInTheDocument();
    expect(condition).toBeInTheDocument();
    expect(humidity).toBeInTheDocument();
  });
});
