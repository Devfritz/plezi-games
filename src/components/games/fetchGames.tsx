import { Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";

const GamesList = () => {
  const { resultsListGames, errMessage } = useGames();

  return (
    <>
      {errMessage && <Text color="red.500">{errMessage}</Text>}
      <ul>
        {resultsListGames.map((res) => (
          <li key={res.id}>{res.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GamesList;
