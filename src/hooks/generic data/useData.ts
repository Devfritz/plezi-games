import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchDataResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any
) => {
  const [data, setData] = useState<T[]>([]);
  const [errMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(
    () => {
      const controller = new AbortController();
      apiClient
        .get<FetchDataResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setErrorMessage(err.message);
        });

      setLoading(false);
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return {
    data,
    errMessage,
    loading,
  };
};

export default useData;
