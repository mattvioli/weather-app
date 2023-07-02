import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("<WeatherData />", () => {
  it("renders", () => {
    const title = "This is a title";
    render(<Header>{title}</Header>);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
