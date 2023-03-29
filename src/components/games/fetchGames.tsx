import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GamesList = () => {
  const [resultsGames, setResultsGames] = useState<Game[]>([]);
  const [errMessage, setErrorMessage] = useState();
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setResultsGames(res.data.results);
      })
      .catch((err) => setErrorMessage(err.message));
  }, []);

  return (
    <>
      {errMessage && <Text color="red.500">{errMessage}</Text>}
      <ul>
        {resultsGames.map((res) => (
          <li key={res.id}>{res.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GamesList;
