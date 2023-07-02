import { useQuery } from "react-query";
import { fetchWeather } from "../queries/fetchWeather";
import { ApiError } from "./types";

export function useFetchWeather({ location }: { location: string }) {
  const { data, remove, refetch, isFetching, isLoading, status, error } =
    useQuery({
      queryFn: async () => {
        if (/^\s*$/.test(location)) return undefined;
        return (await fetchWeather(location)).data;
      },
      queryKey: ["weather", { location }],
      onError: (err: ApiError) => err,
      enabled: false,
      select: (data) => {
        return {
          temperature: data?.current.temp_c,
          weatherCondition: data?.current.condition.text,
          humidity: data?.current.humidity,
        };
      },
    });

  return {
    data,
    remove,
    refetch,
    isFetching,
    isLoading,
    status,
    error,
  };
}
