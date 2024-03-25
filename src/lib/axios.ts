import axios from "axios";
import useSWR, { Key, Fetcher, useSWRConfig } from "swr";
import { backendUrl } from "../config";

function httpClient(baseURL: string) {
  const client = axios.create({ 
    baseURL,
    timeout: 4000,
    timeoutErrorMessage: "Connection Problem",
  });
  return client;
}

export const fetcher: Fetcher<any, any> = (url: string) =>
  client.get(url).then((res: { data: any }) => res.data);
  
export const client = httpClient(backendUrl);