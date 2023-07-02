import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import App from "./App";
import mockAxios from "jest-mock-axios";
import { useFetchWeather } from "./hooks/useFetchWeather";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

const Wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

afterEach(() => {
  mockAxios.reset();
});

describe("<App/>", () => {
  it("renders learn react link", () => {
    render(
      <Wrapper>
        <App />
      </Wrapper>
    );
    const header = screen.getByText(/Weather App/);
    expect(header).toBeInTheDocument();
  });

  it("renders data when location is set, and get weather is clicked", async () => {
    mockAxios.get.mockResolvedValue({
      data: {
        current: {
          temp_c: 12,
          condition: { text: "Partly Cloudy" },
          humidity: 82,
        },
      },
    });
    render(
      <Wrapper>
        <App />
      </Wrapper>
    );
    act(() => {
      const input = screen.getByRole(/textbox/);
      fireEvent.change(input, { target: { value: "Melbourne" } });
      screen.getByText(/Get Weather/i).click();
    });
    const temperature = await screen.findByText(/Temperature: 12°C/i);
    const condition = await screen.findByText(
      /Weather Condition: Partly cloudy/i
    );
    const humidity = await screen.findByText(/Humidity: 82%/i);

    expect(temperature).toBeInTheDocument();
    expect(condition).toBeInTheDocument();
    expect(humidity).toBeInTheDocument();
  });
});
