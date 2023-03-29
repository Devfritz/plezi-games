import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {CanceledError} from 'axios'
const useGames = () => {
  interface Game {
    id: number;
    name: string;
  }

  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

  const [resultsListGames, setResultsListGames] = useState<Game[]>([]);
  const [errMessage, setErrorMessage] = useState();
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setResultsListGames(res.data.results);
      })
      .catch((err) => {
		 if(err instanceof CanceledError) return;
        setErrorMessage(err.message);
      });

    return () => controller.abort();
  }, []);

  return {
    resultsListGames,
    errMessage,
  };
};

export default useGames;
