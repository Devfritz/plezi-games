import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const prevuseGames = () => {
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
        if (err instanceof CanceledError) return;
        setErrorMessage(err.message);
      });

    return () => controller.abort();
  }, []);

  return {
    resultsListGames,
    errMessage,
  };
};
