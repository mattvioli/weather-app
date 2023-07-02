import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { WeatherForm } from ".";

const mockProps = {
  location: "East Blue",
  setLocation: jest.fn(),
  handleGetWeather: () => console.log("Sydney"),
};

describe("<WeatherForm/>", () => {
  it("renders", () => {
    render(<WeatherForm {...mockProps} />);
    const button = screen.getByText(/Get Weather/i);
    const input = screen.getByRole(/textbox/);
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("can use the fetch prop", () => {
    render(<WeatherForm {...mockProps} />);
    const logSpy = jest.spyOn(console, "log");

    act(() => screen.getByText(/Get Weather/i).click());
    expect(logSpy).toHaveBeenCalledWith("Sydney");
  });
});
