import useSWR from "swr";
import { fetcher } from "../lib/axios";

export const useFetch = (url: string) => {
  const { data, error } = useSWR(url, fetcher);
  console.log(data);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
